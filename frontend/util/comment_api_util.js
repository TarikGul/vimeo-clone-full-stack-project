export const deleteComment = id => {
    return $.ajax({
        url: `api/comments/${id}`,
        method: 'DELETE'
    })
}

export const createComment = comment => {
    return $.ajax({
        url: 'api/comments',
        method: 'POST',
        data: { comment }
    })
}


