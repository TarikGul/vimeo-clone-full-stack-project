export const createFollow = follow => {
    return $.ajax({
        url: `api/followers`,
        method: 'POST',
        data: { follow }
    });
};

export const deleteFollow = id => {
    return $.ajax({
        url: `api/followers/${id}`,
        method: 'DELETE'
    });
};