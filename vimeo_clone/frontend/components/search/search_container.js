import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/post_actions';

const msp = state => {
    return {

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