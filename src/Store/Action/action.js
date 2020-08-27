export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADDVALUE = 'ADDVALUE';
export const SUBTRACTVALUE = 'SUBTRACTVALUE';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

export const increment = () => {
    return {
        type: INCREMENT
    }
}
export const decrement = () => {
    return {
        type: DECREMENT
    }
}
export const addValue = (value) => {
    return {
        type: ADDVALUE,
        value,
    }
}
export const subtractValue = (value) => {
    return {
        type: SUBTRACTVALUE,
        value,
    }
}
export const storeResult = (cnt) => {
    return dispatch => {
        setTimeout(() => {
            dispatch({
                type: STORE_RESULT,
                storeCounter: cnt        
            });
        }, 3000);
    }
}
export const deleteResult = (id) => {
    return {
        type: DELETE_RESULT,
        delID: id
    }
}