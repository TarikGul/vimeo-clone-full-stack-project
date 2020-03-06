import * as APIUTIL from '../util/comment_api_util'

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT'
export const REMOVE_COMMENT = 'REMOVE_COMMENT'
// export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'

const removeComment = commentId => {
    return {
        type: REMOVE_COMMENT,
        commentId
    }
}

const receiveComment = comment => {
    return {
        type: RECEIVE_COMMENT,
        comment
    }
}

// const receiveComments = comments => {
//     return {
//         type: RECEIVE_COMMENTS,
//         comments
//     }
// }

export const deleteComment = commentId => dispatch => {
    return APIUTIL.deleteComment(commentId)
        .then(() => dispatch(removeComment(commentId)))
}

export const createComment = comment => dispatch => {
    return APIUTIL.createComment(comment)
        .then(createdComment => dispatch(receiveComment(createdComment)))
}


