import { useRef, useState, useEffect } from 'react';
import React from 'react'

const FollowButton = props => {
    const [hoverRef, isHovered] = useHover();
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
        
        <div className="Follow-button-container" ref={hoverRef}>
            {
                following 
                ?
                (   
                        isHovered 
                        ?
                        (
                            <button className="unfollowing-button" >
                                <img className="unfollowing-i" src="/unfollow-x.svg" width="8" height="8" />
                                <div className="unfollowing-button-text">
                                    UnFollow
                                </div>
                            </button>
                        ) : (
                            <button className="following-button" >
                                <img className="following-i" src="/follow-check.svg" width="14" height="14" />
                                <div className="following-button-text">
                                    Following
                                </div>
                            </button>
                        )
                    
                    
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

function useHover() {
    const [value, setValue] = useState(false);

    const ref = useRef(null);

    const handleMouseOver = () => setValue(true);
    const handleMouseOut = () => setValue(false);

    useEffect(
        () => {
            const node = ref.current;
            if (node) {
                node.addEventListener('mouseover', handleMouseOver);
                node.addEventListener('mouseout', handleMouseOut);

                return () => {
                    node.removeEventListener('mouseover', handleMouseOver);
                    node.removeEventListener('mouseout', handleMouseOut);
                };
            }
        },
        [ref.current] // Recall only if ref changes
    );

    return [ref, value];
}

export default FollowButton;