import { connect } from 'react-redux';
import Homepage from './homepage';
import { fetchPosts } from '../../actions/post_actions';
import { fetchUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        sessionId: state.session.id,
        entities: state.entities,
        posts:  Object.values(state.entities.posts),
        ownProps
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchPosts: () => dispatch(fetchPosts()),
        fetchUser: id => dispatch(fetchUser(id))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Homepage)