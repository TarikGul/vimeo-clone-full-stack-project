import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';

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
        case 'loading':
            component = <LoadingProcessFile />
        default:
            return null;
    }

    return (
        <div className="modal-background" onClick={closeModal}>
            {
                component === 'loading'
                ?
                (
                    <div className="modal-child-loading" onClick={e => e.stopPropagation()}>
                        {component}
                    </div>
                ) : (
                    <div className="modal-child" onClick={e => e.stopPropagation()}>
                        {component}
                    </div>
                )
            }
            
        </div>
    )
}

const msp = (state) => {
    return {
        modal: state.ui.modal
    }
}

const mdtp = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(
    msp,
    mdtp
)(Modal);