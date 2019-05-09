import React from 'react';
import Styled from 'styled-components';
import Panier from './Panier';
import Config from '../Config';
import Axios from 'axios'; 

const Container = Styled.div`
    text-align: center;
    background-color: white;
    padding:30px 20px;
    margin-top:20px;
    button{
        color: white;
        background-color: #b09067;
        padding: 5px;
        text-transform: uppercase;
        font-weight: bold;
        border-radius: 5px;
    }
`;

class PanierHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            panier: this.getPanier(),
            totalPrice: this.getTotalPrice()
         };
    }

    getPanier(){
        const Panier = JSON.parse(localStorage.getItem('Panier'));
        return Panier;
    }

    getTotalPrice(){
        const Panier = this.getPanier();
        let totalPrice = 0;
        for(let i=0; i < Panier.length; i++){
            totalPrice += Panier[i].totalPrice;
        }
        return totalPrice;
    }

    renderPanierEl(){
        const { panier } = this.state;
        if(panier.length > 0){
            return  panier.map((element, index)=>{
                        return (
                            <Panier {...element} key={index}/>
                        );
                    });
        }
    }

    sendOrder(panier,totalPrice){
        console.log('@panier sendOrder');
        console.log('@panier sendOrder#0',panier);
        const url = `${Config.host}/orders/add`;
        Axios.post(url,{
            orders: panier,
            totalPrice: totalPrice
        })
        .then(data =>{
            console.log('@panier sendOrder data', data);
        })
        
    }

    render() {
        const { totalPrice, panier }= this.state;

        if(panier.length === 0){
            return (
                <Container className="container">
                    <h3>Panier vide</h3>
                </Container>
            );
        } 
 
        return (
            <Container className="container">
                <h3>Produit de votre choix </h3>
                {this.renderPanierEl()}
                <div>
                    <h5>Total :</h5>
                    <p><strong>{totalPrice} €</strong></p>
                </div>
                <button onClick={() => this.sendOrder(panier,totalPrice)}>Passer la commande</button>
            </Container>
        );
    }
}

export default PanierHome;