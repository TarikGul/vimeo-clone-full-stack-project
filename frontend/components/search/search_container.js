import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchPosts } from '../../actions/post_actions';
import { dispatchResults } from '../../actions/search_actions';
import SearchBar from './search';

const msp = state => {
    const { entities, ui } = state
    return {
        entities,
        ui
    };
};

const mdtp = dispatch => {
    return {
        fetchPosts: () => dispatch(fetchPosts()),
        dispatchResults: (result) => dispatch(dispatchResults(result))
    };
};

export default withRouter(connect(
    msp, 
    mdtp
)(SearchBar));