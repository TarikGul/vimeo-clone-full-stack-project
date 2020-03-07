import React from 'react'
import { Link } from 'react-router-dom'

const PostIndexItem = props => {
    return (
        <div className="post-container">
            {/* <Link></Link>
            <Link></Link> */}
            <div className="post-item">
                <div className="post-video">
                    <video src={props.post.videoUrl} autoPlay={true} controls/>
                </div>
                {props.post.title}
            </div>
        </div>
    )
}

export default PostIndexItem