import { RECEIVE_SEARCH_RESULT } from '../actions/search_actions';

const searchReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch(action.type) {
        case RECEIVE_SEARCH_RESULT:
            nextState['results'] = action.result
            return nextState
        default:
            return nextState
    }
}

export default searchReducer;