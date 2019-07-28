import React from 'react';
// import { ADD, SUBTRACT } from '../const/index';
import { connect } from 'react-redux';
import { Add, Subtract } from '../action/index';


function Main(props) {
    return (
        <div>
            <h1>Test</h1>
            <h1>{props.number}</h1>
            <button onClick={props.onAddBtnClick}>Add</button>
            <button onClick={props.onSubtractClick}>Subtract</button>
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
       onAddBtnClick: () => dispatch(Add()),
       onSubtractClick: () => dispatch(Subtract())
    }
}


export default connect(mapStateToProps,  mapDispatchToProps)(Main);
