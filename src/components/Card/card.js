import React from 'react';
import './card.css';

class Card extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {id, flip, value} = this.props
        return (

            <div className={flip?'backcard':'frontcard'}  onClick={() =>  this.props.change(id)}>
            {flip?value:'!'}
         </div >
        );
    }
}


export default Card;