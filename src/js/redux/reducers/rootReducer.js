const initialState = {
    count: 0
};

const rootReducer = (state = initialState, action) => {
    console.log("reducer running", action);
    return state;
}

export default rootReducer;

