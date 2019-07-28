import React from 'react';
import { connect } from 'react-redux';
import { Divide} from '../action/index';

function Second(props) {
    return (
        <div>
            <h1>Test 2</h1>
            <h1>{props.number}</h1>
            <button onClick={props.onDivideClick}>Divide</button>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        number: state.number
    }
}

function mapDispatchToProps(dispatch) {
    return {
       onDivideClick: () => dispatch(Divide()),
    }
}

export default connect(mapStateToProps,  mapDispatchToProps)(Second);