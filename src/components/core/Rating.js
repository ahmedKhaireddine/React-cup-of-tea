import React from "react";
import Styled from 'styled-components';
import Icon from './Icon'; 

class Rating extends React.Component {
    render() {
        if (this.props.stars === null) {
            return (
              <div>No rating yet</div>
            );
          }

        let starsIteration = this.props.stars;
        const starsEl = [];
        let iconName;
        for (let i = 5; i > 0; i--) {
          if (starsIteration >= 1) {
            iconName = 'star';
          }
          if (starsIteration <= 0) {
            iconName = 'star_border';
          }
          if (starsIteration === .5) {
            iconName = 'star_half';
          }
          starsEl.push(<Icon key={i} name={iconName} color={'gold'} size={24} />);
          starsIteration--;
        }
      
        return (
            <div>
                {starsEl}
            </div>
        );
    }
}

export default Rating;