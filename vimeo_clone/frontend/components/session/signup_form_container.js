import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SignupForm from './signup_form';
import { Link } from 'react-router-dom';
import React from 'react'
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'signup'
    }
}

const mapDispatchToProps = dispatch => {
    return {
        
        processForm: formUser => dispatch(signup(formUser)),
        otherForm: (
            <button onClick={() => dispatch(openModal('login'))}>
                Login
            </button>
        ),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignupForm);