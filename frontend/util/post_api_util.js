export const fetchPosts = () => {
    return $.ajax({
        url: 'api/posts',
        method: 'GET'
    })
}

export const fetchPost = id =>  {
    return $.ajax({
        url: `api/posts/${id}`,
        method: 'GET'
    })
}

export const createPost = post => {
    return $.ajax({
        url: 'api/posts',
        method: 'POST',
        data: post,
        contentType: false, 
        processData: false
    })
}

export const deletePost = postId => {
    return $.ajax({
        url: `/api/posts/${postId}`,
        method: 'DELETE'
    })
}