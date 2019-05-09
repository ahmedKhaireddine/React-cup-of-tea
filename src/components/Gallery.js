import React from 'react';
import Styled from 'styled-components';
import CatogorieCard from './core/CategorieCard';
import ProductCard from './core/ProductCard';
import Config from '../Config';

const Container = Styled.div`
    div{
        background-color: white;
        margin: 10px auto 30px;
    }
    h2{
        padding:30px;
        color: #93aa12;
    }
`;

class Gallery extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            products : []
        }
    }

    componentDidMount(){
        console.log('this.props.id : ', this.props.id);
        fetch(`${Config.host}/products/categorieId/`+ this.props.id)
        .then(res => res.json())
        .then(data => {
            // console.log('@gallery : ', data); 
            this.setState({
                products: data.product
            });
        })
    }

    renderCategorie(){
        return(
            <CatogorieCard
                title={this.props.Categorie.name}
                source={Config.host + this.props.Categorie.image}
                description={this.props.Categorie.description} 
            />
        );
    }

    renderProducts(){
        const tabProducts = this.state.products;
        if(tabProducts.length > 0){
            return tabProducts.map((product, index)=>{
                return(
                    <article className="col-12 col-md-4" key={index}>
                        <ProductCard 
                            id={product.id}
                            title={product.title}
                            source={Config.host + product.image}
                            price={product.price}
                            description={product.description}
                        />
                    </article>
                );
            });
        }
    }

    render(){
        // console.log('this.props gallery : ', this.props);
        if(this.state.products.length === 0){
            return(
                <Container>
                    <div>
                        <p>Is loding ...</p>
                    </div>
                </Container>
            );
        }
        return(
            <Container>
                <div className="row">
                    {this.props.page ==="offreCategorie" && <h2 className="col-12"><span>Produit associer a votre choix</span></h2>}
                    <div className="col-12">
                        {this.renderCategorie()}
                    </div>
                    <div className="col-12 row">
                        {this.renderProducts()}
                    </div>
                </div>
            </Container>
        );
    }
}

export default Gallery;