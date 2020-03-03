import React from 'react';
import { Link } from 'react-router-dom';


const Greeting = ({ currentUser, logout }) => {
    // debugger
    const sessionLinks = () => (
        <div className="nav-button-list">
            <div className='nav-button-list-left'>
                <div className="navbar-name">Bimeo</div>
                <div className="join-box">
                    <div className='join'>
                        <Link to='/signup'>Join</Link>
                    </div>
                </div>
                &nbsp;&nbsp;
                <div className="login">
                    <Link to='/login'>Login</Link>
                </div>
            </div>
            <div className="nav-button-list-right">
                <div className='search-greeting'>
                    Search
                </div>
                <div className="dropdown-greeting">
                    new
                </div>
            </div>
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