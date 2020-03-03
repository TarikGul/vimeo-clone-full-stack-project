import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SignupForm from './signup_form';
import { Link } from 'react-router-dom';
import React from 'react'

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'signup',
        navLink: <Link to='./login'>Log in</Link>
    }
}

const mapDispatchToProps = dispatch => {
    return {
        processForm: formUser => dispatch(signup(formUser))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignupForm);