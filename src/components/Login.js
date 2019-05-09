import React from 'react';
import Styled from 'styled-components';
import Input from './core/Input';
import Axios from 'axios';
import Icon from './core/Icon';


const Container = Styled.div`
    margin: 50px auto;
    background-image: url(http://localhost:3000/img/bg.jpg);
    padding:10px;
    text-align: center;
    background-color: white;
    height: 400px;
    border-radius: 5px;
    color: white;
    .div-login{
        margin: 30px 20px;
    }
    .div-login h3{
        padding: 30px 0;
    }
    .div-login ul{
        padding-left:0;
    }
    .div-login li{
        list-style:none;
        border-bottom:1px solid white;
        border-radius: 5px;
        margin:0 auto 10px;
        padding:0;
        width:70%;
    }
    .div-login li:last-child{
        border:0;
    }
    .div-login input{
        padding:10px 0;
        width: 80%;
        margin: 0 auto;
        background-color: transparent;
        border:0;
    }
    .button{
        display:block;
        background-color: black;
        opacity: .5;
        
    }

    .button button{
        padding:10px 0;
        width:100%;
        color: white;
        border-radius: 5px;
        background-color: transparent;
        opacity: 1;
    }

    .button input{
        width:100%;
        color: white;
        opacity: 1;
    }

`;

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            email:"",
            password:"",
        };
        this.onChangeInput = this.onChangeInput.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeInput(key, value){
        this.setState({
            [key]: value
        });
    }

    onSubmit(event){
        const { email, password } = this.state;
        event.preventDefault();
        const user = {
            email, password
        }
        console.log('@Login : ', user);
    }

    render() {
        return (
          <Container className="container">
              <div className="div-login">
                <h3>Signin</h3>
                <form onSubmit={this.onSubmit}> 
                    <ul>
                        <li>
                            <Icon name={'person'} color={'white'} size={24} />
                            <Input
                                stateName = "email"
                                type = "email" 
                                onChange={this.onChangeInput}
                                value={this.state.email}
                            />
                        </li>  
                        <li>
                            <Icon name={'https'} color={'white'} size={24} />   
                            <Input
                                stateName = "password"
                                type = "password"
                                onChange={this.onChangeInput}
                                value={this.state.password}
                            />
                        </li>  
                        <li className="button">
                            <Input
                                type = "submit"
                                value="Connexion" 
                            />
                        </li>  
                        <li className="button">
                            <button>Signup</button>
                        </li>  
                    </ul>
                </form>
              </div>
          </Container>  
        );
    }
}

export default Login;