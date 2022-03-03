import React, { Component } from 'react';

class Counter extends Component {

    state = {
        count: 0
    }

    render() {
        return (
            <div>
                <h1>Counter</h1>
                <h1>{this.state.count}</h1>
                <button>Click</button>
            </div>
        );
    }
}

export default Counter;