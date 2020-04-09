import React from 'react';
import { Link } from 'react-router-dom';
import DropdownNav from './dropdown'

//Synonymous with NavBar

const Greeting = ({ currentUser, logout, openModal}) => {
    const sessionLinks = () => (
        <div id="navbar-container-1">
            <div id="navbar-container-2">
                <div className="nav-button-list">
                    <div className='nav-button-list-left'>
                        <div className="navbar-name">
                            <img className="logo-img" src="/bimeoJP.png" alt=""/>
                        </div>
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
                        <DropdownNav openModal={openModal}/>
                    </div>
                </div>
            </div>
        </div>
    );
    // const greetUser = () => (
    //     <div>
    //         <HomeNavbarContainer />
    //     </div>
    // )

    // return currentUser ? greetUser() : sessionLinks()
    return sessionLinks()
}

export default Greeting;