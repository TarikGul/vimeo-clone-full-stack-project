import { RECEIVE_POST, RECEIVE_ALL_POSTS } from '../actions/post_actions'

const postsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state)
    switch(action.type) {
        case RECEIVE_ALL_POSTS:
            return action.posts;
        case RECEIVE_POST:
            nextState[action.post.post.id] = action.post.post;
            return nextState
            //need to also put a delete
        default: 
            return state;
    }
}

export default postsReducer