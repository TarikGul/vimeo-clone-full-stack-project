import { connect } from 'react-redux';
import { createPost } from '../../../actions/post_actions';
import { withRouter } from 'react-router-dom';
import { openModal, closeModal } from '../../../actions/modal_actions';
import PostForm from './post_form';

const msp = state => {
    const { session } = state
    return {
        sessionId: session.id
    };
};

const mdtp = dispatch => {
    return {
        createPost: (post) => dispatch(createPost(post)),
        openModal: type => dispatch(openModal(type)),
        closeModal: () => dispatch(closeModal()),
    };
};

export default withRouter(connect(
    msp, 
    mdtp
)(PostForm))