import * as APIUTIL from '../util/follow_api_util';

export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const REMOVE_FOLLOW = 'REMOVE_FOLLOW';

const receiveFollow = follow => {
    return {
        type: RECEIVE_FOLLOW,
        follow
    };
};

const removeFollow = followId => {
    return {
        type: REMOVE_FOLLOW,
        followId
    };
};

export const deleteFollow = followId => dispatch => {
    return APIUTIL.deleteFollow(followId)
        .then(() => dispatch(removeFollow(followId)));
};

export const createFollow = follow => dispatch => {
    return APIUTIL.createFollow(follow)
        .then((createdFollow) => dispatch(receiveFollow(createdFollow)));
};