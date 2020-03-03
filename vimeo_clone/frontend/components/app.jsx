import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route, Redirect, HashRouter, Switch } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container'
import AuthRoute from '../util/route_util'
import Modal from './modal/modal'

const App = () => (
    <div>
        {/* <Modal /> */}
        <GreetingContainer />
        <Switch>
            <AuthRoute exact path='/login' component={LoginFormContainer} />
            <AuthRoute exact path='/signup' component={SignupFormContainer} />
            {/* <Route path ='/' component={GreetingContainer} /> */}
        </Switch>
            
        /* this is going to be the homepage component below*/
        <div className="main-container">

        </div>
    </div>
);
export default App;