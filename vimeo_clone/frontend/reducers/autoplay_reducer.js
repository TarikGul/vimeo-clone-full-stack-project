import { TOGGLE_AUTOPLAY } from '../actions/toggle';

const autoplayReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch(action.type) {
        case TOGGLE_AUTOPLAY:
            nextState['toggle'] = true;
            return nextState;
        default: 
            return nextState['toggle'] = false;
    }
}

export default autoplayReducer;