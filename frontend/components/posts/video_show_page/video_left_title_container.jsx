import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchPost } from '../../../actions/post_actions'
import Title from './video_left_title'

const msp = (state, ownProps) => {
    return {
        entities: state.entities
    };
};

const mdtp = dispatch => {
    return {
        fetchPost: postId => dispatch(fetchPost(postId))
    };
};

export default withRouter(connect(
    msp, 
    mdtp
)(Title))