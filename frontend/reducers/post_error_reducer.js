import { RECEIVE_POST_ERRORS } from '../actions/post_actions';

const postErrorReducer = (state = [], action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_POST_ERRORS:
            return action.err
        default:
            return state
    };
};

export default postErrorReducer;