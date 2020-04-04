import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import UserRecentPosts from './user_recent_posts';

const msp = (state) => {
    return {
        entities: state.entities
    };
};

const mdtp = dispatch => {
    return {
        
    }
}

export default withRouter(connect(
    msp, 
    mdtp
)(UserRecentPosts))