import React, { useState } from "react";
import { connect } from "react-redux"
import { INC, DEC } from '../constants/actionNames';


function Counter(props) {
    console.log("render Counter");
    const [amount, setAmount] = useState(1);
    return (
        <div>
            <h1>I am a counter</h1>
            <div>
                <p>Count: {props.count}</p>
                Inc/Dec Amount --> 
                <input id="myInp" type="number" value={amount} onChange={(e) => setAmount(+e.target.value)}/>
            </div>
            <button onClick={() => props.onIncrementClick(amount)}>Increment</button>
            <button onClick={() => props.onDecrementClick(amount)}>Decrement</button>
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
        onIncrementClick: (amount) => {
            console.log("trigger/dispatch increment action");
            dispatch({type: INC, payload: amount});
        },
        onDecrementClick: (amount) => {
            console.log("trigger/dispatch decrement action");
            dispatch({type: DEC, payload: amount});
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
