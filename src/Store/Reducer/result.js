import * as ActionTypes from '../Action/action';

const initialState = {
    results: []
}

const reducer = (state=initialState, action) => {
    console.log(state.counter);
    switch(action.type) {
        case ActionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), val: action.storeCounter}) // push하면 mutate되니까 새로운 배열을 반환하는 concat을 사용.
            }
        case ActionTypes.DELETE_RESULT:
            const updatedResults = state.results.filter(result => result.id !== action.delID)
            return {
                ...state,
                results: updatedResults
            }
    }
    return state;
}

export default reducer;  