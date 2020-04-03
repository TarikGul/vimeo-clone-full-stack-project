import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Plays from './plays';

const msp = state => {
    return {
        entities: state.entities
    };
};

const mdtp = dispatch => {
    return {

    };
};

export default withRouter(connect(
    msp,
    mdtp
)(Plays));