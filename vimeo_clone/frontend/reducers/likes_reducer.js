import { REMOVE_LIKE, RECEIVE_LIKE } from '../actions/like_actions';
import { RECEIVE_POST} from '../actions/post_actions'


const likesReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    let likeId;

    switch (action.type) {
        case RECEIVE_LIKE:
            likeId = Object.keys(action.payload)[0];
            nextState[likeId] = action.payload[likeId];
            return nextState
        case REMOVE_LIKE:
            likeId = Object.keys(action.payload)[0];
            delete nextState[likeId];
            return nextState;
        case RECEIVE_POST:
            return Object.assign(nextState, action.post.likes)
        default: 
            return nextState;
    };
};

export default likesReducer;