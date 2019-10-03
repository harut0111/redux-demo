import React from "react";
// import { store } from "../redux/store/index";
import { connect } from 'react-redux';

const LogState = (props) => {
    console.log("render LogState");
    //  getState() method does't couse rerender so it will call only after re/render
    // const state = store.getState();
    return(
        <div>
            <h1>Current State Changes</h1>
            {/* <p>{JSON.stringify(state)}</p> */}
            <p>count: {props.count}  amount: {props.amount} </p>
            <p>inputVal: {props.inputVal}</p>

        </div>
    )
}

const mapStateToProps = (state) => {
    console.log('mapStateToProps LogState', state);
    return {
        count: state.count,
        amount: state.amount,
        inputVal: state.inputVal
    }
}

export default connect(mapStateToProps)(LogState);