import modalReducer from './modal_reducer';
import { combineReducers } from 'redux';

const uiReducer = combineReducers({
        modal: modalReducer  
})

export default uiReducer;