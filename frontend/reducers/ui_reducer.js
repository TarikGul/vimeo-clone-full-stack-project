import { combineReducers } from 'redux';

import modalReducer from './modal_reducer';
import searchReducer from './search_reducer';
import autoplayReducer from './autoplay_reducer';

const uiReducer = combineReducers({
        modal: modalReducer,
        search: searchReducer,
        autoplay: autoplayReducer,
})

export default uiReducer;