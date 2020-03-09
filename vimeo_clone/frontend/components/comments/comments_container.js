import { connect } from 'react-redux'
import React from 'react'
import CommentForm from './comments_form'
import { createComment, deleteComment } from '../../actions/comment_actions'


const mapStateToProps = state => {
    return {
        state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createComment: comment => dispatch(createComment(comment)),
        deleteComment: commentId => dispatch(deleteComment(commentId))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentForm)