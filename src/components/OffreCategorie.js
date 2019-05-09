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

class OffreCategorie extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            categorie: {}
        }
    }
    componentDidMount(){
        fetch(`${Config.host}/categories/${this.props.match.params.id}`)
        .then(res => res.json())
        .then(data => {
            // console.log('@offerCategorie: ', data);c
            this.setState({
                categorie: data.Categorie
            });
        })
    }
    render(){
        if(Object.keys(this.state.categorie).length > 0){
            return(
                <Container>
                    <Gallery 
                        Categorie={this.state.categorie}
                        id={this.state.categorie.id}
                        page="offreCategorie"
                    />
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

export default OffreCategorie;