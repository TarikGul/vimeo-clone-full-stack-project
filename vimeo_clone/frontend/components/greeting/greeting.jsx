import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
    // debugger
    const sessionLinks = () => (
        <div className='login-signup'>
            <Link to='/login'>Login</Link>
            &nbsp;or&nbsp;
            <Link to='/signup'>Sign Up</Link>
        </div>
    );
    const greetUser = () => (
        <div className="welcome">
            <h2 className="header-greeting">Hi, {currentUser.username}</h2>
            <button className="header-logout" onClick={logout}>Log Out</button>
        </div>
    )

    return currentUser ? greetUser() : sessionLinks()
}

export default Greeting;