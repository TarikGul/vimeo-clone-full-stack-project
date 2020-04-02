import useHover from '../../../hooks/use_hover';
import React from 'react';

const FollowButton = props => {
    const [hoverRef, isHovered] = useHover();
    const { sessionId, postId, entities, createFollow, deleteFollow } = props;
    // debugger
    const isFollowing = (field) => {
        if (entities.users[sessionId].leaders === undefined) {
            return false
        }
        const curPostUserId = entities.posts[postId].uploader.user_id;
        const userFollowers = Object.values(entities.users[sessionId].leaders);
        for (let i = 0; i < userFollowers.length; i++) {
            // debugger
            if (userFollowers[i].user_id === curPostUserId) {
                if (field === 'following') {
                    // debugger
                    return true;
                } else if (field === 'leaderId') {
                    return userFollowers[i].id
                }
            }
        }
        return false;
    };
    const following = isFollowing('following');
    const leaderId = isFollowing('leaderId');
    const uploaderId = entities.posts[postId].uploader.id
    console.log(props)
    return (
        
        <div className="Follow-button-container" ref={hoverRef}>
            {
                following 
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