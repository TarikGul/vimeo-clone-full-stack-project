import { combineReducers } from 'redux';

import sessionErrorsReducer from './session_errors_reducer'
import postErrorReducer from './post_error_reducer'

const errorsReducer = combineReducers({ 
    session: sessionErrorsReducer,
    posts: postErrorReducer
 })

export default errorsReducer;