import React from "react";
import { connect } from "react-redux"
import { INC, DEC } from '../constants/actionNames';

function Counter(props) {
    return (
        <div>
            <h1>I am a counter</h1>
            <p>Count: {props.count}</p>
            <button onClick={props.onIncrementClick}>Increment</button>
            <button onClick={props.onDecrementClick}>Decrement</button>
        </div>
    )
}

function mapStateToProps(state) {
    console.log('mapStateToProps', state);
    return {
        count: state.count
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onIncrementClick: () => {
            console.log("inc click");
            dispatch({type: INC, payload: 1});
        },
        onDecrementClick: () => {
            console.log("dec click");
            dispatch({type: DEC, payload: 1});
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
