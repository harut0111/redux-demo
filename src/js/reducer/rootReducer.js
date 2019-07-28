import { ADD, SUBTRACT, DIVIDE } from '../const/index';
 

const initialState = {
    number: 5,
}

function rootReducer(state = initialState, action) {
    console.log('reducer', action);
    switch (action.type) {
        case ADD:
            return Object.assign({}, state, {
                number: state.number + 1,
            })
        case SUBTRACT:
            return Object.assign({}, state, {
                number: state.number - 1,
            })
        case DIVIDE:
            return Object.assign({}, state, {
                number: state.number / 2,
            })
        default:
            return state;
    }
}

export default rootReducer;
