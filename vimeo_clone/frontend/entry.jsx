import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root'
import { fetchPost, fetchPosts } from './actions/post_actions'
// import * as APIUtil from './util/session_api_util'
import { login } from './actions/session_actions'
import { fetchUser } from './actions/user_actions'


document.addEventListener('DOMContentLoaded', () => {
    let store;

    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }   
    window.fetchUser = fetchUser;
    window.fetchPost = fetchPost;
    window.fetchPosts = fetchPosts;
    window.dispatch = store.dispatch
    window.getState = store.getState
    const root = document.getElementById('root')
    ReactDOM.render(<Root store={store} />, root)
})