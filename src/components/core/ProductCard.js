import React from 'react';
import Styled, {css} from 'styled-components';
import PropType from 'prop-types';
import Modal from 'react-modal';
import ModalCard from './ModalCard';

const customStyles = {
    content : {
      'top'                   : '50%',
      'left'                  : '50%',
      'right'                 : 'auto',
      'bottom '               : 'auto',
      'marginRight'           : '-50%',
      'transform'             : 'translate(-50%, -50%)',
      'width' : '80%',
      'height' : '80%',
      'padding':0,
    },
};

const Container = Styled.div`
    color: #616467;
    padding: 10px;
    div {
        text-align:center;
    }
    div img{
        width: 100%;
    }
    h3{
        padding: 10px;
    }
    button{
        color: white;
        background-color: #b09067;
        padding: 10px;
        text-transform: uppercase;
        font-weight: bold;
        border-radius: 5px;
    }
    button:hover{
        box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.6);
    }
`;

class ProductCard extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            modalIsOpen: false
        };

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    openModal() {
        this.setState({modalIsOpen: true});
    }

    afterOpenModal() {
    // references are now sync’d and can be accessed.
    // this.subtitle.style.color = ‘#f00’;
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    render(){
        console.log('@productCard this.props', this.props);
        const {id , title, source, price, description} = this.props;
        return(
            <Container>
                <h3>{title}</h3>
                <div>
                    <img src={source} alt={"image de produit" + title}/>
                </div>
                <p>
                    A partir de
                    <br/>
                    <strong>{price} €</strong>
                </p>
                <button onClick={this.openModal}>Voir le produit</button>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    key={id}
                >
                    <ModalCard
                        key={id}
                        id ={id}
                        title ={title}
                        source ={source}
                        price ={price}
                        description ={description}
                        closeModal={this.closeModal}
                    />
                </Modal>
            </Container>
        );
    }
}

ProductCard.defaultProps = {
    id: 0,
    title: "A définir",
    source: "https://via.placeholder.com/150",
    price: 0,
    description: "A definir",
    onClick: ()=>{}
}

ProductCard.propsTypes ={
    id: PropType.number,
    title: PropType.string,
    source: PropType.string,
    price: PropType.number,
    description: PropType.string,
    onClick: PropType.func
}

export default ProductCard;