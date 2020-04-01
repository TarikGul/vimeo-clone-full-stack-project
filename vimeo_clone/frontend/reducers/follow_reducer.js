import { RECEIVE_CURRENT_USER } from '../actions/session_actions'
import { RECEIVE_FOLLOW, REMOVE_FOLLOW } from '../actions/follow_actions';

const followerReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    // debugger
    switch(action.type) {
        case RECEIVE_FOLLOW:
            nextState[action.follow.id] = action.follow;
            return nextState;
        case REMOVE_FOLLOW:
            delete nextState[action.followId];
            return nextState;
        case RECEIVE_CURRENT_USER:
            nextState[action.currentUser.followers]
        default:
            return nextState
    };
};

export default followerReducer;