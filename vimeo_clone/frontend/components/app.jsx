import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route, Redirect, HashRouter, Switch } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container'
import AuthRoute from '../util/route_util'

const App = () => (
    <div>
        <header id="navbar-container">
            <h1>Bimeo</h1>
            <GreetingContainer />
            <Switch>
                <AuthRoute exact path='/login' component={LoginFormContainer} />
                <AuthRoute exact path='/signup' component={SignupFormContainer} />
                {/* <Route path ='/' component={GreetingContainer}> */}
            </Switch>
        </header>
    </div>
);
export default App;