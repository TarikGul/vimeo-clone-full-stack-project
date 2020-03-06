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
        data: { post }
    })
}
