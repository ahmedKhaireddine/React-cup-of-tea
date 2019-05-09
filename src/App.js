import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Styled, {css} from 'styled-components';
import Home from './components/Home';
import OffreCategorie from './components/OffreCategorie'
import Offres from './components/Offers';
import PanierHome from './components/PanierHome';
import Config from './Config';
import Icon from './components/core/Icon';
import Signup from './components/Signup';
import Login from './components/Login';

 
class App extends React.Component {
  render() {
    return (
      <Router>
        <header>
        <img src={Config.host +"/img/ribbon.svg"} alt="ribbon" className="reward"/>
        <p className="message">Livraison offert à partir de 65€ d'achat !</p>
        <Link to="/">
          <img src={Config.host +"/img/logo.png"} alt="logo"/>
        </Link>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/offers">Offres</Link>
              </li>
              <li>
                <Link to="/panier">
                    <Icon name={'shopping_cart'} color={'white'} size={24}/>
                </Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </nav>
        </div>
        </header>

        <Route exact path="/" component={Home}/>
        <Route exact path="/categorie/:id" component={OffreCategorie}/>
        <Route exact path="/offers" component={Offres}/>
        <Route exact path="/panier" component={PanierHome}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/login" component={Login}/>
      </Router>
    );
  }
}

export default App;
