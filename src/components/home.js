import React from 'react';
import Board from './board';
class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            size: 0,
        };

    }
    print(size) {
        this.setState({ size: size });
        console.log(size);
    }
    render() {

        return (
            <div>
                <h2>Select level</h2>
                <br />
                <button onClick={() => this.print(4)} >Beginner</button>
                <button onClick={() => this.print(6)}>Intermediate</button>
                <button onClick={() => this.print(10)}>Advanced</button>
                <Board size={this.state.size} />
            </div >
        );
    }
}


export default Home;