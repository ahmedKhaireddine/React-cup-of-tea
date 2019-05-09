import React from 'react';
import Styled from 'styled-components';
import Icon from '../core/Icon';
import Rating from '../core/Rating';

const Container = Styled.div`
    text-align: center;
    padding:30px 10px;
    color: #616467;
    .icon{
        float:right;
    }
    .icon i{
        display: block;
        margin-bottom: 5px;
    }
    img{
        width: 100%;
        margin:20px 0;
    }
    .div-commande{
        padding:10px;
        box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
        border-radius:5px;
        width:80%;
        margin:0 auto;
    }
    .div-commande select{
        padding:10px;
        background-color: white;
    }
    .div-commande h4,.div-commande p,.div-commande select{
        margin-bottom:10px;
    }
    button{
        color: white;
        background-color: #b09067;
        padding: 5px;
        text-transform: uppercase;
        font-weight: bold;
        border-radius: 5px;
    }
    @media screen and (min-width: 640px){
        padding:30px 32px;
        .product-details{
            margin-top:50px;
            text-align:left;
        }
    }
`;

class ModalCard extends React.Component{
    constructor(props){
        super(props);
        this.state={
            Quantity: 0
        }
    }

    addPanier(price, idProduct){
        const totalPrice = (parseInt(this.state.Quantity) / 100) * price;
        let strageStr =  localStorage.getItem('Panier');
        let Panier = [];
        if(strageStr !== null){
            Panier = JSON.parse(strageStr);
            const index = this.searchProduct(Panier, idProduct);
            if(index === -1){
                Panier.push({
                    idProduct:idProduct,
                    Quantity: parseInt(this.state.Quantity),
                    totalPrice: totalPrice
                });
            }
            if(index !== -1){
                let addProduct ={
                    idProduct:idProduct,
                    Quantity: parseInt(Panier[index].Quantity) + parseInt(this.state.Quantity),
                    totalPrice: Panier[index].totalPrice + totalPrice
                }
                Panier = Panier.filter(Element => Element.idProduct !== idProduct)
                Panier.push(addProduct);
            }

        }else{
            Panier.push({
                idProduct:idProduct,
                Quantity: parseInt(this.state.Quantity),
                totalPrice: totalPrice
            });
        }
        localStorage.setItem('Panier', JSON.stringify(Panier));
        this.props.closeModal();
    }

    searchProduct(Panier, idProduct){
        let index = -1;
         for(let i = 0; i < Panier.length; i++){
            if(Panier[i].idProduct == idProduct){
                index = i;
            }
        }
        return index;
    }

    renderOption(){
        const optionTable= [];
        for(let i = 1; i < 11; i++){
            let value = i * 100;
            optionTable.push(<option value={value}>Pochette de {value} g</option>);
        }
        return optionTable;
    }

    render(){
        console.log('@modal this.props', this.props);
        const {id, title, source, price, description, closeModal} = this.props;
        return(
            <Container className="row">
                <div className="col-12">
                <span className="icon">
                    <Icon name={"highlight_off"} color={"grey"} size={24} onClick={closeModal}/>
                    <Icon name={"favorite"} color={"grey"} size={24}/>
                </span>
                    <h3>{title}</h3>
                    <Rating stars={3} color={"yellow"} size={24}/>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <img src={source} alt={"image d'un thé"}/>
                </div>
                <div className="col-12 col-md-6 col-lg-8">
                    <div className="product-details">
                        <h4>A propos de produit:</h4>
                        <p>{description}</p>
                    </div>
                    <div className="div-commande">
                        <h4>Commandez votre thé</h4>
                        <select onChange={(event) => this.setState({
                            Quantity: event.target.value
                        })}>
                            {this.renderOption()}
                        </select>
                        <p><strong>{price} €</strong></p>
                        <button onClick={()=> this.addPanier(price, id)}>Ajouter au panier</button>
                    </div>
                </div> 
            </Container>
        );
    }
}

export default ModalCard; 