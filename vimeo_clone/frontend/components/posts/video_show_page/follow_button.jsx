import React from 'react'

const FollowButton = props => {
    const { sessionId, postId, entities } = props;
    const isFollowing = () => {
        const curPostUsername = entities.posts[postId].uploader.username;
        const userFollowers = Object.values(entities.users[sessionId].leaders);
        for (let i = 0; i < userFollowers.length; i++) {
            if (userFollowers[i].username === curPostUsername) {
                return true;
            }
        }
        return false;
    };
    const following = isFollowing();
    return (
        
        <div className="Follow-button-container">
            {
                following 
                ?
                (
                    <div>
                        <img className="follow-i" src="/follow-plus.svg" width="14" height="14" />
                        <div className="follow-button-text">
                            Follow
                        </div>
                    </div>
                ) : (
                    <button className="follow-button">
                        <img className="follow-i" src="/follow-plus.svg" width="14" height="14" />
                        <div className="follow-button-text">
                            Follow
                        </div>
                    </button> 
                )
            }
        </div>
    )
}

export default FollowButton;