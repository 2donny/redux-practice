const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0
}

// Reducer
const rootReducer = (state=initialState, action) => {
    if(action.type === 'INC_COUNTER') {
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    if(action.type === 'ADD_COUNTER') {
        return {
            ...state,
            counter: state.counter + action.value
        }
    }
    return state;
}

// Store
const store = createStore(rootReducer);
console.log(store.getState())

// Subscription
store.subscribe(() => {
    console.log('[Subscription]', store.getState()); // state가 변경되자 마자 실행됨.
})

// Dispatching action -> state를 변경하는 유일한 방법, Store로 dispatch state를 변경할 Action을 보낸다.
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});
console.log(store.getState());


// Subscription