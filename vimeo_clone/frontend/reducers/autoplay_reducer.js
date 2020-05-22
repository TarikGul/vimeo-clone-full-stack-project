import { TOGGLE_AUTOPLAY } from '../actions/toggle';

const autoplayReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    debugger
    switch(action.type) {
        case TOGGLE_AUTOPLAY:
            nextState['autoplay'] = true;
            return nextState;
        default: 
            return nextState['autoplay'] = false;
    }
}

export default autoplayReducer;