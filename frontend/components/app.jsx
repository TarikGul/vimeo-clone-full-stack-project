import React from 'react';
import ReactGA from 'react-ga';
import { Route, Redirect, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal/modal';
import GreetingContainer from './greeting/greeting_container';
import SplashContainer from './splash/splash_container';
import HomeNavbarContainer from './main_navbar/navbar_container';
import HomepageContainer from './homepage/homepage_container';
import PostShowContainer from './posts/post_show_container';
import ManageVideosContainer from './manage/videos/manage_videos_container';
import UploadVideosContainer from './manage/upload/upload_videos_container';
import ResultsPageContainer from './search/results_container';

if (window.location.hostname !== 'localhost') {
    ReactGA.initialize('UA-162754702-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
}

const App = () => (
    <div className="main">
        <Modal />
        <ProtectedRoute path='/search' component={ResultsPageContainer}/>
        <ProtectedRoute path='/manage/upload' component={UploadVideosContainer} />
        <ProtectedRoute path='/manage/videos' component={ManageVideosContainer} />
        <ProtectedRoute path='/posts/:postId' component={PostShowContainer}/>
        <ProtectedRoute path='/home' component={HomeNavbarContainer}/>
        <AuthRoute exact path='/' component={GreetingContainer}/>
        <AuthRoute exact path='/' component={SplashContainer}/>
        <Route exact path='/home' component={HomepageContainer} />
    </div>
);
export default App;