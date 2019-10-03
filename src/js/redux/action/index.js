import { VAL_CHANGE, INP_VAL_CHANGE } from '../../constants/actionNames';

const onValueChange = (ev) => {
    console.log("dispatch ValueChange action");
    return {
        type: VAL_CHANGE, 
        payload: Number(ev.target.value)
    }
}

const onInputValuChange = (ev) => {
    console.log('dispatch InputValueChange action')
    return {
        type: INP_VAL_CHANGE,
        payload: ev.target.value,
    }
}

export {onValueChange, onInputValuChange };