import { connect } from 'react-redux';

import { dispatchToggle } from '../../../actions/toggle';

import ToggleButton from './toggle';

const msp = state => {
    const { ui } = state;
    return {
        ui
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