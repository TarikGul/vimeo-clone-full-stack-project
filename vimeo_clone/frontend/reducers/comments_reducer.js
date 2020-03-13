import { RECEIVE_POST } from '../actions/post_actions'
import { REMOVE_COMMENT, RECEIVE_COMMENT } from '../actions/comment_actions'

const commentsReducer = (state = {}, action) => {
    Object.freeze(state)
    let nextState = Object.assign({}, state)
    switch(action.type) {
        case RECEIVE_COMMENT:
            nextState[action.comment.id] = action.comment
            return nextState 
        case REMOVE_COMMENT:
            delete nextState[action.commentId]
            return nextState
        case RECEIVE_POST:
            if (action.post.comments === undefined) {
                return nextState
            }
            return Object.assign(nextState, action.post.comments)
        default:
            return state;
    }
}

export default commentsReducer