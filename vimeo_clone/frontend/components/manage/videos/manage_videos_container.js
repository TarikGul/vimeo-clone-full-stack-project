import ManageVideos from './manage_videos'
import { connect } from 'react-redux'
import { fetchPost } from '../../../actions/post_actions'
import { fetchUser } from '../../../actions/user_actions'
import { logout } from '../../../actions/session_actions'
import { deletePost } from '../../../actions/post_actions'


const mapStateToProps = (state, ownProps) => {
    return {
        state,
        ownProps
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPost: postId => dispatch(fetchPost(postId)),
        fetchUser: userId => dispatch(fetchUser(userId)),
        processForm: () => dispatch(logout()),
        deletePost: postId => dispatch(deletePost(postId))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ManageVideos)