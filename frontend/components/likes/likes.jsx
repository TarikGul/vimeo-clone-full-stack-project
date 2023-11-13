import React from 'react';

const LikeButton = props => {
    const { 
        sessionId, 
        entities, 
        match,
        createLike,
        deleteLike
    } = props
    const postId = match.params.postId
    const { likes } = entities
    const keys = Object.keys(likes);

    const countLikes = () => {
        let counter = 0;

        keys.forEach((k) => {
            if(likes[k].post_id.toString() === postId) {
                counter += 1
            };
        });
        return counter
    };

    const likeable = () => {
        for(let i = 0; i < keys.length; i++){
            if (likes[keys[i]].post_id.toString() === postId 
            && sessionId === likes[keys[i]].user_id) {
                return false
            };
        };
        return true
    }

    const findLikeId = () => {
        for (let i = 0; i < keys.length; i++) {
            if (likes[keys[i]].post_id.toString() === postId
                && sessionId === likes[keys[i]].user_id) {
                return likes[keys[i]].id
            };
        };
    }
    const likeId = findLikeId();
    return (
        <div className="likes-container">
            {
                likeable()
                ?
                (
                    <div className="likes-info" onClick={() => createLike({user_id: sessionId, post_id: postId})}>
                        <img className="likes-i" src="/like-button.svg" width="18" height="18" />
                        <div className="likes-text">
                            {countLikes()}
                        </div>
                    </div>
                ) : (
                    <div className="likes-info" onClick={() => deleteLike(likeId)}>
                        <img className="likes-i-red" src="/like-button.svg" width="18" height="18" />
                        <div className="likes-text">
                            {countLikes()}
                        </div>
                    </div>
                )
            }
        </div>
    )
};

export default LikeButton;