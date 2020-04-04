import React from 'react';
import { timeSince } from '../../../util/date_api_util'

const PostUserItem = props => {
    const { post } = props
    const date = new Date(post.created_at)
    return (
        <div className="recent-post-box-container">
            <div className="recent-post-box">
                <img className="recent-thumbnail" src={post.thumbnailUrl} alt=""/>
                <div className="recent-post-title">
                    {post.title}
                </div>
                <div className="recent-date-posted">
                    {`${timeSince(date)} ago`}
                </div>
            </div>
        </div>
    )
}

export default PostUserItem;