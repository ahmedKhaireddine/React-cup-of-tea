import React from 'react';

class Input extends React.Component{

    render(){
        const { type, name, onChange, value, stateName} = this.props;
        return(
                <input 
                    type={type} 
                    className={name} 
                    onChange={(event)=>onChange(stateName, event.target.value)}
                    value={value}
                />
        );
    }
}

export default Input;