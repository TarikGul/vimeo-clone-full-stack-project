import React from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../../actions/post_actions'
import PostIndex from './post_index'
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state, ownProps) => {
    return {
        state,
        ownProps
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPosts: () => dispatch(fetchPosts())
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(PostIndex))