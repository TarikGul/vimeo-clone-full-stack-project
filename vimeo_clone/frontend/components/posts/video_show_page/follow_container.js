import { connect } from 'react-redux';
import FollowButton from './follow_button'
import { deleteFollow, createFollow } from '../../../actions/follow_actions'


const msp = state => {
    return {
        sessionId: state.session.id,
        currentUser: state.entities.users[state.session.id],
        entities: state.entities
    };
};

const mdtp = dispatch => {
    return {
        deleteFollow: followId => dispatch(deleteFollow(followId)),
        createFollow: follow => dispatch(createFollow(follow))
    };
};

export default connect(
    msp,
    mdtp
)(FollowButton);