import React from 'react';
import { Link } from 'react-router-dom';
//Synonymous with NavBar

const Greeting = ({ currentUser, logout, openModal}) => {
    const sessionLinks = () => (
        <div id="navbar-container-1">
            <div id="navbar-container-2">
                <div className="nav-button-list">
                    <div className='nav-button-list-left'>
                        <div className="navbar-name">Bimeo</div>
                        <div className="join-box">
                            <div className='join-container'>
                                <button className='join success' onClick={() => openModal('signup')}>Join</button>
                            </div>
                        </div>
                        &nbsp;&nbsp;
                        <div className="login-container">
                            <button className='login success' onClick={() => openModal('login')}>Login</button>
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