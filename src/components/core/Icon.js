import  React from 'react';
class Icon extends React.Component{
    render() {
        const {color, size, onClick, name} = this.props;
        return (
          <i className="material-icons"
            style={{
              color: color,
              fontSize: size
            }} onClick={onClick}>
            {name}
          </i>
        );
    }
}
    
Icon.defautProps = {
    color: 'black',
    size: 24,
    name: 'star',
    onClick: ()=>{} 
};
export default Icon;