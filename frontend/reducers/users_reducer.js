import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER } from '../actions/user_actions'
import { RECEIVE_FOLLOW, REMOVE_FOLLOW } from '../actions/follow_actions'

const usersReducer = (state = {}, action) => {
    Object.freeze(state)
    let nextState = Object.assign({}, state)
    let keys = Object.keys(nextState)
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.user.id]: action.user });
        case RECEIVE_USER:
            return Object.assign({}, state, { [action.user.id]: action.user });
        case RECEIVE_FOLLOW:
            if (nextState[keys[keys.length - 1]].leaders === undefined) {
                nextState[keys[keys.length - 1]]['leaders'] = {[action.follow.follower.id]: action.follow.follower}
                return nextState
            } else {
                nextState[keys[keys.length - 1]].leaders[action.follow.follower.id] = action.follow.follower 
                return nextState
            }
        case REMOVE_FOLLOW:
            delete nextState[keys[keys.length - 1]].leaders[action.followId]
            return nextState
        default:
            return state;
    }
}

export default usersReducer;