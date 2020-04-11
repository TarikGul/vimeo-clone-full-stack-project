import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ResultsPage from './results';

const msp = state => {
    const { ui, entities } = state
    return {
        ui,
        entities
    };
};

const mdtp = dispatch => {
    return {

    };
};

export default withRouter(connect(
    msp, 
    mdtp
)(ResultsPage))