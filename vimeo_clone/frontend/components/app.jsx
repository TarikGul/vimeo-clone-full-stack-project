import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route, Redirect, HashRouter, Switch } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container'
import AuthRoute from '../util/route_util'

const App = () => (
    <div>
        <div id="navbar-container-1">
            <div id="navbar-container-2">
                {/* <h1 className="navbar-name">Bimeo</h1> */}
                <GreetingContainer />
                <Switch>
                    <AuthRoute exact path='/login' component={LoginFormContainer} />
                    <AuthRoute exact path='/signup' component={SignupFormContainer} />
                    {/* <Route path ='/' component={GreetingContainer} /> */}
                </Switch>
            </div>
        </div>
    </div>
);
export default App;