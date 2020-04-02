import useHover from '../../hooks/use_hover';
import React from 'react';

const FollowButton = props => {
    const [hoverRef, isHovered] = useHover();
    const { sessionId, postId, entities, createFollow, deleteFollow, currentUser } = props;
    const isFollowing = (field) => {
        if (currentUser.leaders === undefined) {
            return false;
        };
        const curPostUserId = entities.posts[postId].user_id;
        const userLeaders = Object.values(entities.users[sessionId].leaders);
        for (let i = 0; i < userLeaders.length; i++) {
            if (userLeaders[i].userId === curPostUserId) {
                if (field === 'following') {
                    return true;
                } else if (field === 'leaderId') {
                    return userLeaders[i].id;
                };
            }; 
            if (userLeaders[i].follower_id === curPostUserId && field === 'following') {
                return true;
            } else if (field === 'leaderId') {
                return userLeaders[i].id;
            };
        };
        return false;
    };

    const leaderId = isFollowing('leaderId');
    const uploaderId = entities.posts[postId].uploader.id;
    return (
        <div className="Follow-button-container" ref={hoverRef}>
            {
                isFollowing('following') 
                ?
                (   
                        isHovered 
                        ?
                        (
                            <button className="unfollowing-button" onClick={() => deleteFollow(leaderId)}>
                                <img className="unfollowing-i" src="/unfollow-x.svg" width="8" height="8" />
                                <div className="unfollowing-button-text">
                                    Unfollow
                                </div>
                            </button>
                        ) : (
                            <button className="following-button">
                                <img className="following-i" src="/follow-check.svg" width="14" height="14" />
                                <div className="following-button-text">
                                    Following
                                </div>
                            </button>
                        )
                    
                    
                ) : (
                        <button className="follow-button" onClick={() => createFollow({ user_id: sessionId, follower_id: uploaderId })}>
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