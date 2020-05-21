import { connect } from 'react-redux';

import { dispatchToggle } from '../../../actions/toggle';

import ToggleButton from './toggle';

const msp = state => {
    return {
        
    };
};

const mdtp = dispatch => {
    return {
        dispatchToggle: () => dispatch(dispatchToggle()),
    };
};

export default connect(
    msp,
    mdtp
)(ToggleButton);