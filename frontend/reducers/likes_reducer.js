import { REMOVE_LIKE, RECEIVE_LIKE } from '../actions/like_actions';
import { RECEIVE_POST} from '../actions/post_actions'


const likesReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_LIKE:
            nextState[action.like.id] = action.like
            return nextState
        case REMOVE_LIKE:
            delete nextState[action.likeId];
            return nextState;
        case RECEIVE_POST:
            return Object.assign(nextState, action.post.likes)
        default: 
            return nextState;
    };
};

export default likesReducer;