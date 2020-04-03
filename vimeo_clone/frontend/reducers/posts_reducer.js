import { RECEIVE_POST, RECEIVE_ALL_POSTS, REMOVE_POST } from '../actions/post_actions'
import { CREATE_PLAY } from '../actions/play_actions'

const postsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state)
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
            nextState[state.plays]
        default: 
            return state;
    }
}

export default postsReducer