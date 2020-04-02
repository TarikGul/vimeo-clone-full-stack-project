export const createLike = like => {
    return $.ajax({
        url: `api/likes`,
        method: 'POST',
        data: { like }
    });
};

export const deleteLike = id => {
    debugger
    return $.ajax({
        url: `api/likes/${id}`,
        method: 'DELETE'
    });
};