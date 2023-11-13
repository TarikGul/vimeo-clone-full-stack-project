import * as APIUTIL from '../util/plays_api_util'

export const CREATE_PLAY = 'CREATE_PLAY';

const receivePlay = play => {
    return {
        type: CREATE_PLAY,
        play
    };
};

export const createPlay = play => dispatch => {
    return APIUTIL.createPlay(play)
        .then(createdPlay => dispatch(receivePlay(createdPlay)))
};