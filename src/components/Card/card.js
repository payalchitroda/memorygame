import React from 'react';
import './card.css';

class Card extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value:'!'
        };
    }

    
    checkFlip(id,flip,value) {
        // console.log("child   "+id)
            if (flip == false) {
                this.card.style.backgroundColor = 'rgb(211, 154, 49)';
                this.props.change(id)
                this.setState({
                    value:value,
                });

            }
            else {
                this.card.style.backgroundColor = 'aquamarine';
                this.setState({
                    value:'!',
                });
            }

    }
    render() {

        return (

            <div className='card' ref={(e) => this.card = e} onClick={() => this.checkFlip(this.props.id,this.props.flip,this.props.value )}>
             {this.state.value}
         </div >
        );
    }
}


export default Card;