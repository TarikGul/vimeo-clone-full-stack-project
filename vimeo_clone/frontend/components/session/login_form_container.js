import React from 'react'
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';
import { Link, withRouter } from 'react-router-dom';
import { openModal, closeModal } from '../../actions/modal_actions'

const mapStateToProps = ({ errors }, ownProps) => {
    return {
        errors: errors.session,
        formType: 'login',
        ownProps
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

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm));