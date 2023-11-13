import * as APIUTIL from '../util/like_api_util';

export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';

const receiveLike = like => {
    return {
        type: RECEIVE_LIKE,
        like
    };
};

const removeLike = likeId => {
    return {
        type: REMOVE_LIKE,
        likeId
    };
};

export const deleteLike = likeId => dispatch => {
    return APIUTIL.deleteLike(likeId)
        .then(() => dispatch(removeLike(likeId)))
};

export const createLike = like => dispatch => {
    return APIUTIL.createLike(like)
        .then(createdLike => dispatch(receiveLike(createdLike)))
};