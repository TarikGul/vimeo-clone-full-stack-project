import React from 'react';

const PostUserItem = props => {

    return (
        <div className="recent-post-box-container">
            <div className="recent-post-box">
                <img className="recent-thumbnail" src={props.post.thumbnailUrl} alt=""/>
            </div>
        </div>
    )
}

export default PostUserItem;