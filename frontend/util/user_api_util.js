export const fetchUser = userId => {
    return $.ajax({
        url: `api/users/${userId}`,
        method: 'GET'
    })
}