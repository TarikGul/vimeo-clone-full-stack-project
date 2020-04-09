import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchPosts } from '../../actions/post_actions';
import SearchBar from './search';

const msp = state => {
    const { entities } = state
    return {
        entities
    };
};

const mdtp = dispatch => {
    return {
        fetchPosts: () => dispatch(fetchPosts()),
    };
};

export default withRouter(connect(
    msp, 
    mdtp
)(SearchBar));