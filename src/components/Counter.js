import React from 'react';
import { frogCounter } from '../actions/counterActions';
import { connect } from 'react-redux';

const Counter = (props) => {
    return (
        <div className="counter">
            <h1>FROGS: {props.frogs.frogs}</h1>
            <button onClick={props.frogCounter}>🐸Catch🐸</button>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        frogs: state.frogs
    }
}

const mapDispatchToProps = dispatch => {
    return {
        frogCounter: () => dispatch(frogCounter())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);