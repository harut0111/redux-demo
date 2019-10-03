import React from 'react';
import { connect }  from 'react-redux';
import { onValueChange } from "../redux/action/index";
import Input from './Input';

const Amount = (props) => {
    console.log("render Amount");
    return (
        <div>   
            Inc/Dec Amount --> 
            <input 
                id="myInp" 
                type="number" 
                value={props.amount} 
                onChange={props.onValueChange} />
            <Input />
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log('mapStateToProps Amount', state);
    return {
        amount: state.amount,
        inputVal: state.inputVal
    }
}

// this is another way to map dispatch to props
const mapDispatchToProps = { 
    onValueChange
}

export default connect(mapStateToProps, mapDispatchToProps)(Amount);