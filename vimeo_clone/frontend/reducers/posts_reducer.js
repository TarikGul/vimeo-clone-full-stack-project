import { RECEIVE_POST, RECEIVE_ALL_POSTS, REMOVE_POST } from '../actions/post_actions'
import { CREATE_PLAY } from '../actions/play_actions'

const postsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state)
    debugger
    switch(action.type) {
        case RECEIVE_ALL_POSTS:
            return action.posts;
        case RECEIVE_POST:
            nextState[action.post.post.id] = action.post.post;
            return nextState;
        case REMOVE_POST: 
            delete nextState[action.postId];
            return nextState;
        case CREATE_PLAY:
            const key = Object.keys(state)
            nextState[state[key[0]].plays] + 1
            return nextState
        default: 
            return state;
    }
}

export default postsReducer