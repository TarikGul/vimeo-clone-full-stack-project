export const createPlay = play => {
    return $.ajax({
        url: 'api/plays',
        method: 'POST',
        data: { play }
    });
};

