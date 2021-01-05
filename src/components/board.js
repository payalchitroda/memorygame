import React from 'react';
import Card from './Card/card';
class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            store: [],
        };

    }

    start(size) {
        var store = [];
        for (var i = 0; i < size; i++) {
            for (var j = 0; j < size; j++) {
                store.push(<Card id={i + " " + j} />)
                // console.log("hello");
            }
            store.push(<br />);

        }
        this.setState({ store: store });
    }
    render() {

        return (
            <div>
                <button onClick={() => this.start(this.props.size)}>start</button>

                {/* {this.props.size} */}
                <br />
                {this.state.store}
            </div >
        );
    }
}


export default Board;