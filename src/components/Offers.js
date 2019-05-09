import React from 'react';
import Gallery from './Gallery';
import Styled from 'styled-components';
import Config from '../Config';

const Container = Styled.div`
    text-align:center;
    font-weight: normal;
    @media screen and (min-width: 640px){
        width:80%;
        margin:0 auto;
    }
`;

class Offres extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            Categories: []
        }
    }

    componentDidMount(){
        fetch(`${Config.host}/categories`)
        .then(res => res.json())
        .then(data => {
            console.log('@offerCategorie: ', data); 
            this.setState({
                Categories: data.Categories
            });
        })
    }

    renderCategorie(){
        const tabCategories = this.state.Categories;
        if(tabCategories.length > 0){
            return tabCategories.map((Categorie, index)=>{
                return(
                    <section key={index}>
                        <Gallery 
                            id={Categorie.id}
                            Categorie={Categorie}
                        />
                    </section>
                );
            });
        }
    }

    render(){
        if(this.state.Categories.length > 0){
            return(
                <Container>
                    {this.renderCategorie()}
                </Container>
            );
        }
        return(
            <Container>
                <h3>Is lodding....</h3>
            </Container>
        );
    }
}

export default Offres;