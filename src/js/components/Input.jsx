import React from 'react';
import { connect } from "react-redux";
import { onInputValuChange } from '../redux/action/index';

const Input = (props) => {
    console.log('render Input');
    return (
        <div>
            Type to test:
            <input 
                type="text"
                value={props.inputVal} 
                onChange={props.onInputValuChange} />
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log('mapStateToProps Input', state);
    return {
        inputVal: state.inputVal,
    }
}

const mapDispatchToProps = {
    onInputValuChange
}

export default connect(mapStateToProps, mapDispatchToProps)(Input);