import { TOGGLE_AUTOPLAY } from '../actions/toggle';

const autoplayReducer = (state = false, action) => {
    let nextState = state;
    switch(action.type) {
        case TOGGLE_AUTOPLAY:
            nextState = !state;
            return nextState;
        default: 
            return nextState;
    };
};

export default autoplayReducer;