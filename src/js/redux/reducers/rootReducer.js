import { INC, DEC } from "../../constants/actionNames";

const initialState = {
    count: 0
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
        default:
            return state;
    }
}

export default rootReducer;