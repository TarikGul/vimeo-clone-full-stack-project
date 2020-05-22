export const TOGGLE_AUTOPLAY = 'TOGGLE_AUTOPLAY';

const toggleAutoplay = () => {
    return {
        type: TOGGLE_AUTOPLAY
    };
};

export const dispatchToggle = () => dispatch => {
    dispatch(toggleAutoplay());
};