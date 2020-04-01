import PostShow from './post_show'
import { connect } from 'react-redux'
import { fetchPost } from '../../actions/post_actions'
import { logout } from '../../actions/session_actions'
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state, ownProps) => {
    return {
        session: state.session,
        postId: ownProps.match.params.postId,
        ownProps: ownProps,
        state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPosts: () => dispatch(fetchPosts()),
        fetchPost: postId => dispatch(fetchPost(postId)),
        processForm: () => dispatch(logout())
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(PostShow))