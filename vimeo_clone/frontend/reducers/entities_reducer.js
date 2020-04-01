import { combineReducers } from 'redux';

import usersReducer from './users_reducer'
import postsReducer from './posts_reducer'
import commentsReducer from './comments_reducer';
import followerReducer from './follow_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    posts: postsReducer,
    comments: commentsReducer,
    follows: followerReducer
});

export default entitiesReducer;