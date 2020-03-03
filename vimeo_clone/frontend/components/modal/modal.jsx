import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';
import React from 'react';

const Modal = ({modal, closeModal}) => {
    if(!modal) {
        return null
    }

    let component;
    switch (modal) {
        case 'login':
            component = <LoginFormContainer />;
            break;
        case 'signup':
            component = <SignupFormContainer />;
            break;
        default:
            return null;
    }

    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                { component }
            </div>
        </div>
    )
}

const msp = () => {
    return {
        modal: StaticRange.ui.modal
    }
}

const mdtp = (closeModal) => {
    return {
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(
    msp,
    mdtp
)(Modal);