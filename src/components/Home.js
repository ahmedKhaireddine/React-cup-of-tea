import React from 'react';
import Styled, {css} from 'styled-components';
import SimpleCard from './core/SimpleCard';
import ProductCard from './core/ProductCard';
import Config from '../Config';


const Container = Styled.section`
    text-align:center;
    color: #93aa12;
    font-weight: normal;
    div{
        background-color: white;
        margin: 30px auto;
    }
    h2{
        padding:30px;
    }
    @media screen and (min-width: 640px){
        width:80%;
        margin:0 auto;
    }
`;

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Categories: [],
            newProducts: [],
            error:"",
            tabImage:['http://localhost:3000/img/product/product16_big.jpg','http://localhost:3000/img/product/product16_big.jpg','http://localhost:3000/img/product/product16_big.jpg','http://localhost:3000/img/product/product16_big.jpg','http://localhost:3000/img/product/product16_big.jpg','http://localhost:3000/img/product/product16_big.jpg','http://localhost:3000/img/product/product16_big.jpg','http://localhost:3000/img/product/product16_big.jpg','http://localhost:3000/img/product/product16_big.jpg','http://localhost:3000/img/product/product16_big.jpg','http://localhost:3000/img/product/product16_big.jpg',]
        }
    }

    componentDidMount(){
        const tabLinks =[`/categories`, `/products/newProduct`];
        Promise.all(tabLinks.map((link)=>{
            return fetch(Config.host + link)
            .then(res => res.json())
            .then(data => data);
        })).then(data =>{
            console.log('@home data ', data);
            this.setState({
                Categories: data[0].Categories,
                newProducts: data[1].products
            });
        })
    }

    renderCategories(){
        const tabCategories = this.state.Categories;
        
        if(tabCategories.length > 0){
            return tabCategories.map((categorie, index) =>{
                return(
                    <article className="col-6 col-md-4 col-lg-2" key={index}>
                        <SimpleCard
                            id={categorie.id}
                            title={categorie.name}
                            source={Config.host + categorie.image}
                        />
                    </article>
                );
            });
        }
    }

    renderNewProduct(){
        const tabProducts = this.state.newProducts;
        if(tabProducts.length > 0){
            return tabProducts.map((product, index) =>{
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
    //gerer les erreur
    render(){

        if(this.state.error !== ""){
            return(
                <Container>
                    <h4>{this.state.error}</h4>
                </Container>
            );
        }

        if(this.state.Categories.length === 0){
            return(
                <Container>
                    <h4>Is loading ...</h4>
                </Container>
            );
        }

        return(
            <Container>
                <div className="row justify-content-center">
                    <h2 className="col-12"><span>Choissiez votre thé</span></h2>
                    <div className="offset-lg-1"></div>
                    {this.renderCategories()}
                </div>
                <div className="row">
                <h2 className="col-12"><span>Notre nouveauté</span></h2>
                    {this.renderNewProduct()}
                </div>
            </Container>
        );
    }
}



export default Home;