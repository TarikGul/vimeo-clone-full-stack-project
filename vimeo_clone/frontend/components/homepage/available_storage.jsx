import React from 'react';

const totalBytes = posts => {
    let totalMegabytes = 0;
    const maxYearlyStorage = 500;
    const postsValues = Object.values(posts);

    for (let i = 0; i < postsValues.length; i++) {
        totalMegabytes += postsValues[i].bytes
    }


    return Math.floor((totalMegabytes / maxYearlyStorage) * 100)
}

const AvailableStorage = (props) => {
    const {entities, sessionId} = props
    if (entities.users[sessionId].user_posts === undefined) {
        return null
    }
    const userTotalBytes = totalBytes(entities.users[sessionId].user_posts)

    return (
        <div className="available-storage-container">
            <div className="progress">
                <div className="progress-done" style={{
                    opacity: 1,
                    width: `${userTotalBytes}%`
                }}>
                    {}
                </div>
            </div>
        </div>
    )
}

export default AvailableStorage;
