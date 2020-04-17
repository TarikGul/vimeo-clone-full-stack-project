import * as APIUTIL from '../util/post_api_util'

export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';
export const RECEIVE_POST_ERRORS = 'RECEIVE_POST_ERRORS';

const receivePosts = posts => {
    return {
        type: RECEIVE_ALL_POSTS,
        posts
    }
}

const receivePost = post => {
    return {
        type: RECEIVE_POST,
        post
    }
}

const removePost = postId => {
    return {
        type: REMOVE_POST,
        postId
    }
}

const receiveErrors = err => {
    return {
        type: RECEIVE_POST_ERRORS,
        err
    }
}

export const fetchPosts = posts => dispatch => {
    return APIUTIL.fetchPosts(posts)
        .then((posts) => dispatch(receivePosts(posts)))
}

export const fetchPost = postId => dispatch => {
    return APIUTIL.fetchPost(postId)
        .then(post => dispatch(receivePost(post)))
}

export const deletePost = postId => dispatch => {
    return APIUTIL.deletePost(postId)
        .then(() => dispatch(removePost(postId)))
}

export const createPost = formData => dispatch => {
    return APIUTIL.createPost(formData)
        .then(createdPost => dispatch(receivePost(createdPost)),
            err => dispatch(receiveErrors(err)))      
}