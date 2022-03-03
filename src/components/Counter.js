import React, { Component } from 'react';

class Counter extends Component {

    state = {
        count: 0
    }

    handleClick = () => {
        this.setState({ count: this.state.count + 1 })
    }

    render() {
        return (
            <div>
                <h1>Frogs: {this.state.count}</h1>
                <button onClick={this.handleClick}>🐸Catch a frog🐸</button>
            </div>
        );
    }
}



export default Counter;