import { connect } from 'react-redux';
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

export default connect(
    msp, 
    mdtp
)(SearchBar);