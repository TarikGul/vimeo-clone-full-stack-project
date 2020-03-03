import modalReducer from './modal_reduer';
import { combineReducers } from 'redux';

const uiReducer = combineReducers({
    modal: modalReducer
})

export default uiReducer