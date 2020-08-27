import * as ActionTypes from '../Action/action';

const initialState = {
    counter: 0,
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case ActionTypes.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }
        case ActionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case ActionTypes.ADDVALUE:
            return {
                ...state,
                counter: state.counter + action.value
            }
        case ActionTypes.SUBTRACTVALUE:
            return {
                ...state,
                counter: state.counter - action.value
            }
    }
    return state;
}

export default reducer;  