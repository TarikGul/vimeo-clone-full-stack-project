import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route, Redirect, HashRouter, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util'
import Modal from './modal/modal'
import SplashContainer from './splash/splash_container'
import HomeNavbarContainer from './main_navbar/navbar_container'
import HomepageContainer from './homepage/homepage_container'
import PostShowContainer from './posts/post_show_container'

const App = () => (
    <div className="main">
        <Modal />
        <Route path="/posts/:postId" component={PostShowContainer}/>
        <Route path='/home' component={HomeNavbarContainer}/>
        <Route exact path='/' component={GreetingContainer}/>
        <Route exact path='/' component={SplashContainer}/>
        <Route exact path='/home' component={HomepageContainer} />
    </div>
);
export default App;