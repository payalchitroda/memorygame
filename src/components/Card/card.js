import React from 'react';
import './card.css';

class Card extends React.Component {
   

    render() {

        return (
            <div className="card">
              {this.props.id}          
            </div >
        );
    }
}


export default Card;