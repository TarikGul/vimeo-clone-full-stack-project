import React from 'react'
import ManageVideos from './manage_videos'
import { connect } from 'react-redux'
import { fetchPost } from '../../../actions/post_actions'


const mapStateToProps = (state, ownProps) => {
    return {
        state,
        ownProps
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPost: postId => dispatch(fetchPost(postId))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ManageVideos)