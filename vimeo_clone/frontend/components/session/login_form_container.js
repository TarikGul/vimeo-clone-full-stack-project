import React from 'react'
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';
import { Link } from 'react-router-dom';
import { openModal, closeModal } from '../../actions/modal_actions'

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'login'
    }
}

const mapDispatchToProps = dispatch => {
    return {
        processForm: formUser => dispatch(login(formUser)),
        otherForm: (
            <button onClick={() => dispatch(openModal('signup'))}>
                Signup
            </button>
        ),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm);