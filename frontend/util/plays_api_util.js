export const createPlay = play => {
    return $.ajax({
        url: 'api/video_plays',
        method: 'POST',
        data: { play }
    });
};

