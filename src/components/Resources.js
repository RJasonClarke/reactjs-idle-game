import React from 'react';
import { frogCounter } from '../actions/counterActions';
import { connect } from 'react-redux';

const Resources = (props) => {
    return (
        <div>
            <h1 className="resources">FROGS: {props.frogs.frogs}</h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(Resources);