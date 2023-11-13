export const RECEIVE_SEARCH_RESULT = 'RECEIVE_SEARCH_RESULT';

const receiveSearchResult = result => {
    return {
        type: RECEIVE_SEARCH_RESULT,
        result
    }
}

export const dispatchResults = result => dispatch => {
    dispatch(receiveSearchResult(result))
}