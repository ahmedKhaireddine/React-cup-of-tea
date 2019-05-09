import React from 'react';
import Styled ,{css} from 'styled-components';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const Container = Styled.div`
    text-align: center;
    padding: 10px;
    h4{
        color: #616467;
        padding: 10px;
    }
    &:hover{
        box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
        border-radius:5px;
    }
    div img{
        width:100%;
    }
`;

class SimpleCard extends React.Component{
    render(){
        // console.log('@rCategories', this.props);
        const {source, title, id} = this.props
        return(
            <Container>
                <Link to={"/categorie/" + id}>
                    <div>
                        <img src={source} alt={title}/>
                    </div>
                    <h4>{title}</h4>
                </Link>
            </Container>
        );
    }
}

SimpleCard.defaultProps={
    id:0,
    title:"A definir",
    source:"https://via.placeholder.com/150"
}

SimpleCard.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    source: PropTypes.string
}

export default SimpleCard;