import { connect } from 'react-redux';
import PostForm from './post_form';

const msp = state => {
    const { session } = state
    return {
        sessionId: session.id
    };
};

const mdtp = dispatch => {
    return {

    };
};

export default connect(
    msp, 
    mdtp
)(PostForm)