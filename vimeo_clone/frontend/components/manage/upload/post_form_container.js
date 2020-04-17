import { connect } from 'react-redux';
import { createPost } from '../../../actions/post_actions';
import { withRouter } from 'react-router-dom';
import { fetchUser } from '../../../actions/user_actions';
import PostForm from './post_form';

const msp = state => {
    const { session, errors, entities } = state
    return {
        sessionId: session.id,
        users: entities.users,
        errors
    };
};

const mdtp = dispatch => {
    return {
        createPost: (post) => dispatch(createPost(post)),
        fetchUser: id => dispatch(fetchUser(id))
    };
};

export default withRouter(connect(
    msp, 
    mdtp
)(PostForm))