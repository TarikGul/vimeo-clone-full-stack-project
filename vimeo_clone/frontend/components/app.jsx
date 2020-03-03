import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route, Redirect, HashRouter, Switch } from 'react-router-dom';
import Modal from './modal/modal'
import Splash from './splash/splash'

const App = () => (
    <div className="main">
        <Modal />
        <GreetingContainer />
        <Route exact path='/' component={Splash}/>
    </div>
);
export default App;