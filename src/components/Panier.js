import React from 'react';
import Styled from 'styled-components';
import Config from '../Config';
import Icon from './core/Icon';

const Container = Styled.div`
    text-align: center;
    background-color: white;
    margin:10px 0;
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
    border-radius:5px;
    width:80%;
    margin:0 auto;
    div img{
        width:100px;
    }
    .contenu{
        margin-top:30px;
    }
    aside{
        float:right;
        margin-right:20px;
        margin-top:5px;
    }

`;

class Panier extends React.Component {
    constructor(props){
        super(props);
        this.state={
            isError: false,
            isloading: true,
            product: {},
        }
    }
     componentDidMount(){
        const {idProduct} = this.props;
        const url = `${Config.host}/products/id/${idProduct}`;
        // console.log('@panier url ', url);
        fetch(url)
        .then(res => res.json())
        .then(data =>{
            console.log('@panier data ', data);
            this.setState({
                product: data.product,
                isloading: false
            })
        }).catch(err =>{
            this.setState({
                isError: true
            })
        });
     }
    render(){
        const { totalPrice, Quantity }= this.props;
        const { isError, isloading, product }= this.state;
        if(isError === true){
            return(
                <Container>
                    <h2>Error serveur</h2>
                </Container>
            )
        }
        if(isloading=== true){
            return(
                <Container>
                    <div className="row">
                        <div className="col-4 col-lg-3">
                            <h4>Is loading</h4>
                        </div>
                        <div className="col-8 col-lg-9">
                            <aside><Icon name={'highlight_off'} color={'grey'} size={24}/></aside>
                            <p>
                                <span><strong> {Quantity} g </strong></span>
                                <span><strong> {totalPrice} €</strong></span>
                            </p>
                        </div>
                    </div>
                </Container>
            )
        }
        return(
            <Container>
                <div className="row">
                    <div className="col-4 col-lg-3">
                        <img src={Config.host + product.image}/>
                    </div>
                    <div className="col-8 col-lg-9 contenu">
                        <aside><Icon name={'highlight_off'} color={'grey'} size={24}/></aside>
                        <h4>{product.title}</h4>
                        <p>
                            <span><strong> {Quantity} g </strong></span>
                            <span><strong> {totalPrice} €</strong></span>
                        </p>
                    </div>
                </div>
            </Container>
        );
    }
    
}

export default Panier;