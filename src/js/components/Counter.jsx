import React from "react";
import { connect } from "react-redux"
import { INC, DEC } from '../constants/actionNames';
import Amount from './Amount'; 
import LogState from "./LogState";



function Counter(props) {
    console.log("render Counter");
    return (
        <div>
            <h1>I am a counter</h1>
            <div>
                <p>Count: {props.count}</p>
                <Amount />
            </div>
            <button onClick={() => props.onIncrementClick(props.amount)}>Increment</button>
            <button onClick={() => props.onDecrementClick(props.amount)}>Decrement</button>
            <LogState />
        </div>
    )
}

function mapStateToProps(state) {
    console.log('mapStateToProps Counter', state);
    return {
        count: state.count,
        amount: state.amount,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onIncrementClick(amount)  {
            console.log("dispatch increment action");
            dispatch({type: INC, payload: amount});
        },
        onDecrementClick(amount) {
            console.log("dispatch decrement action");
            const action = {type: DEC, payload: amount}; // type is required
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
