import React from 'react';
import Styled from 'styled-components';
import Axios from 'axios';
import Input from './core/Input';
import Config from '../Config';

const Container = Styled.div``;

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            firstName: "",
            lastName: "",
            address:"",
            phone:"",
            email: "",
            password: "" 
        };
        this.onChangeInput = this.onChangeInput.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeInput(key, value){
        this.setState({
            [key]:value
        })
    }
    onSubmit(event){
        // console.log('onSubmit coucou');
        const {firstName, lastName, address, phone, email, password} = this.state;
        event.preventDefault();
        const user = {
            firstName,lastName,address,
            phone,email,password
        } 
        // console.log('onSubmit user', user);
        console.log('url ',`${Config.host}/users/signup`);
        Axios.post(`${Config.host}/users/signup`, user)
        .then(res => console.log(res.data));
        this.setState({
            firstName: "", lastName: "", address:"",
            phone:"", email: "", password: ""
        });
    }

    render() {
        return (
          <Container>
                <h3>Add New User</h3>
                <form onSubmit={this.onSubmit}>
                    <ul>
                        <li className="form-group">
                            <label>First Name : </label>
                            <Input
                                stateName = "firstName"
                                type = "text"
                                name = "form-control" 
                                onChange={this.onChangeInput}
                                value={this.state.firstName}
                            />
                        </li>
                        <li className="form-group">
                            <label>Last Name : </label>
                            <Input 
                                stateName = "lastName"
                                type = "text"
                                name = "form-control" 
                                onChange={this.onChangeInput}
                                value={this.state.lastName}
                            />
                        </li>
                        <li className="form-group">
                            <label>Address : </label>
                            <Input 
                                stateName = "address"
                                type = "text"
                                name = "form-control" 
                                onChange={this.onChangeInput}
                                value={this.state.address}
                            />
                        </li>
                        <li className="form-group">
                            <label>Phone : </label>
                            <Input 
                                stateName = "phone"
                                type = "text"
                                name = "form-control" 
                                onChange={this.onChangeInput}
                                value={this.state.phone}
                            />
                        </li>
                        <li className="form-group">
                            <label>Email : </label>
                            <Input
                                stateName = "email" 
                                type = "email"
                                name = "form-control" 
                                onChange={this.onChangeInput}
                                value={this.state.email}
                            />
                        </li>
                        <li className="form-group">
                            <label>Password : </label>
                            <Input 
                                stateName = "password"
                                type = "password"
                                name = "form-control" 
                                onChange={this.onChangeInput}
                                value={this.state.password}
                            />
                        </li>
                        <li className="form-group">
                            <Input 
                                type = "submit"
                                name = "btn btn-primary" 
                                value="Add"
                            />
                        </li>
                    </ul>
                </form>
          </Container>  
        );
    }
}

export default Signup;