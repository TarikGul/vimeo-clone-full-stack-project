import { TOGGLE_AUTOPLAY } from '../actions/toggle';

const autoplayReducer = (state = false, action) => {
    Object.freeze(state);
    let nextState = Object.assign(state);
    switch(action.type) {
        case TOGGLE_AUTOPLAY:
            nextState = !state;
            return nextState;
        default: 
            return nextState = false;
    };
};

export default autoplayReducer;