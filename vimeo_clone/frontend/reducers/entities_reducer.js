import { combineReducers } from 'redux';

import usersReducer from './users_reducer'
import postsReducer from './posts_reducer'
import commentsReducer from './comments_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    posts: postsReducer,
    comments: commentsReducer
});

export default entitiesReducer;