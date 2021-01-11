import React from 'react';
import Board from './board';
import './home.css';

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
                <h3>Select level</h3>
                <div>
                <button onClick={() => this.print(4)} >Beginner</button> &nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={() => this.print(6)}>Intermediate</button>&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={() => this.print(10)}>Advanced</button>
                </div>
                <br/>
                <Board size={this.state.size} />
            </div >
        );
    }
}


export default Home;