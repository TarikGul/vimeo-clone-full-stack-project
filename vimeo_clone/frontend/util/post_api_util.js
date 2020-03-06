export const fetchPosts = post => {
    return $.ajax({
        url: 'api/posts',
        method: 'GET',
        post
    })
}

export const fetchPost = id =>  {
    return $.ajax({
        url: `api/posts/${id}`,
        method: 'GET'
    })
}
export const fetchComment = id => {
    return $.ajax({
        url: `api/comments/${id}`,
        method: 'GET'
    })
}