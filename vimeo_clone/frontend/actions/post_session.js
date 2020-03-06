import * as APIUTIL from '../util/post_api_util'

export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT'

//-----------------------------------
// I need to also hadd receive comment, and create comment so that
// so that my frontend can send the data to the backend
// Will also need to do the same for videos
//-----------------------------------

const receivePosts = posts => {
    return {
        type: RECEIVE_ALL_POSTS,
        posts
    }
}

const receivePost = post => {
    return {
        type: RECEIVE_POSTS,
        post
    }
}

const receiveComment = comment => {
    return {
        type: receiveComment,
        comment
    }
}


// We are going to add more to this such as likes, plays and comments
// I need to set up receive likes and plays still and add them to a single
export const fetchPosts = posts => dispatch => {
    return APIUTIL.fetchPosts(posts)
        .then((posts) => dispatch(receivePosts(posts)))
}

export const fetchPost = postId => dispatch => {
    return APIUTIL.fetchPost(postId)
        .then(post => dispatch(receivePost(post)))
}

export const fetchComment = commentId => dispatch => {
    return APIUTIL.fetchComment(commentId)
        .then(comment => dispatch(receiveComment(comment)))
}