import React from 'react';
import { timeSince } from '../../../util/date_api_util';
import useHover from '../../../hooks/use_hover';
import { Link, Redirect } from 'react-router-dom'

const PostUserItem = props => {
    const [hoverRef, isHovered] = useHover();
    const { post, history } = props
    const date = new Date(post.created_at)
    


    return (
        <Link to={`/posts/${post.id}`} className="recent-post-box-container" ref={hoverRef} >
            <div className="recent-post-box" >
                {
                    isHovered ?
                    (   
                        <div className="outer-layer-post-thumbnail">
                            <img className="recent-thumbnail-hovered" src={post.thumbnailUrl}  />
                        </div>
                    ) : (
                        <img className="recent-thumbnail" src={post.thumbnailUrl} alt="" />
                    )
                }
                <div className="recent-post-title" >
                    {post.title}
                </div>
                <div className="recent-date-posted">
                    {`${timeSince(date)} ago`}
                </div>
            </div>
        </Link>
    )
}

export default PostUserItem;