import React from 'react';
import Card from './Card/card';
class Board extends React.Component {
    constructor(props) {
        super(props)
        this.change = this.change.bind(this);
        this.state = {
            store: [],
            flipped: [],
        };

    }
    change(i) {
        console.log("parent   "+i)
        const newflipped = this.state.flipped.slice();
        if (newflipped[i] == false) {
            newflipped[i] = !newflipped[i];
            this.setState({ 
              flipped: newflipped,
            });
        }
        
        console.log(this.state.flipped)

    }
    start(size) {
        var k = 0;
        var store = [];
        var flipped= Array(size*size).fill(false);

        
        //store information of card in store
        for (var i = 0; i < size; i++) {
            for (var j = 0; j < size; j++) {
                var value = k % (size * (size / 2));
                // store.push(<Card id={k} value={value} change={this.change} />)
                store.push({ id: k, value: value })
                k++;
            }

        }
        store.sort(() => Math.random() - 0.5)
        this.setState({ store: store,flipped:flipped });


    }



    render() {

        return (
            <div>
                <button onClick={() => this.start(this.props.size)}>start</button>
                {this.state.cardIndex}
                <br />
                {/* {this.state.store}    create instance of card with the help of store, pass flip prop to card*/}
                {this.state.store.map(store => (
                    <Card
                        id={store.id}
                        value={store.value}
                        flip={this.state.flipped[store.id]}
                        change={this.change}
                        
                    />
                ))}
            </div >
        );
    }
}


export default Board;