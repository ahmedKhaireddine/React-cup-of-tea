import React from 'react';
import Styled from 'styled-components';
import PropType from 'prop-types';

const Container = Styled.div`
    h2, p{
        text-align:left;
    }
`;

class CatogorieCard extends React.Component{
    render(){

        const {source, title, description} = this.props;

        return(
            <Container className="row">
               <div className="d-none d-md-inline-block col-md-2 col-lg-1">
                   <img src={source}/>
               </div>
               <div className="col-12 col-md-8 col-lg-9">
                   <h2><span>{title}</span></h2>
                   <p>{description}</p>
               </div>
            </Container>
        );
    }
}

CatogorieCard.defaultProp = {
    title: "A definir",
    source: "https://via.placeholder.com/150",
    description: "..........."
}

CatogorieCard.propTypes = {
    title: PropType.string,
    source: PropType.string,
    description: PropType.string
}

export default CatogorieCard; 