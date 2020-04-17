import { connect } from 'react-redux';
import { createPost } from '../../../actions/post_actions';
import { withRouter } from 'react-router-dom';
import PostForm from './post_form';

const msp = state => {
    const { session, errors } = state
    return {
        sessionId: session.id,
        errors
    };
};

const mdtp = dispatch => {
    return {
        createPost: (post) => dispatch(createPost(post)),
    };
};

export default withRouter(connect(
    msp, 
    mdtp
)(PostForm))