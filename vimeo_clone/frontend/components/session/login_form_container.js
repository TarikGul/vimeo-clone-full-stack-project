import React from 'react'
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';
import { Link } from 'react-router-dom';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'login',
        navLink: <Link to='./signup'>Sign up?</Link>
    }
}

const mapDispatchToProps = dispatch => {
    return {
        processForm: formUser => dispatch(login(formUser))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm);