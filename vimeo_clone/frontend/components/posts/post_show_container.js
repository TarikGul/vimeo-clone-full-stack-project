import React from 'react'
import { connect } from 'react-redux'
import { fetchPost } from '../../actions/post_actions'
import PostShow from './post_show'
import { logout } from '../../actions/session_actions'

const mapStateToProps = (state, ownProps) => {
    // debugger
    return {
        postId: ownProps.match.params.postId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPost: postId => dispatch(fetchPost(postId)),
        processForm: () => dispatch(logout())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostShow)