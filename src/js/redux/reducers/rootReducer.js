import { INC, DEC, VAL_CHANGE, INP_VAL_CHANGE } from "../../constants/actionNames";

const initialState = {
    count: 0,
    amount: 1,
    inputVal: "",
};

const rootReducer = (state = initialState, action) => {
    console.log("rootReducer running", action);
    switch (action.type) {
        case INC:
            return Object.assign({}, state, {
                count: state.count + action.payload,
            })
        case DEC:
            return Object.assign({}, state, {
                count: state.count - action.payload,
            })
        case VAL_CHANGE:
            return Object.assign({}, state, {
                amount: action.payload,
            })
        case INP_VAL_CHANGE:
            return Object.assign({}, state, {
                inputVal: action.payload,
            })
        default:
            return state;
    }
}

export default rootReducer;