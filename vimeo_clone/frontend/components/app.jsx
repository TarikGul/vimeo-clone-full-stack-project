import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route, Redirect, HashRouter, Switch } from 'react-router-dom';
import Modal from './modal/modal'
import SplashContainer from './splash/splash_container'
import HomeNavbarContainer from './main_navbar/navbar_container'
import HomeNavbar from './main_navbar/navbar';

const App = () => (
    <div className="main">
        <Modal />
        <Route path='/home' component={HomeNavbarContainer}/>
        <Route exact path='/' component={GreetingContainer}/>
        <Route exact path='/' component={SplashContainer}/>
    </div>
);
export default App;