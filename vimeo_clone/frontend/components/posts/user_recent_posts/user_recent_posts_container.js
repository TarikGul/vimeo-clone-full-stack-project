import { connect } from 'react-redux';
import UserRecentPosts from './user_recent_posts'

const msp = (state, ownProps) => {
    return {
        entities: state.entities,
        ownProps
    };
};

const mdtp = dispatch => {
    return {
        
    }
}

export default connect(
    msp, 
    mdtp
)(UserRecentPosts)