import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { deleteLike, createLike } from '../../actions/like_actions';
import LikeButton from './likes';

const msp = (state) => {
    const { session, entities } = state
    return {
        sessionId: session.id,
        entities
    };
};

const mdtp = dispatch => {
    return {
        deleteLike: likeId => dispatch(deleteLike(likeId)),
        createLike: like => dispatch(createLike(like))
    };
};


export default withRouter(connect(
    msp,
    mdtp
)(LikeButton))