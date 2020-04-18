import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../../actions/session_actions'
import UserDropdown from './user_dropdown';

const msp = state => {
    return {

    };
};

const mdtp = dispatch => {
    return {
        processForm: () => dispatch(logout())
    };
};

export default withRouter(connect(
    msp, 
    mdtp
)(UserDropdown));