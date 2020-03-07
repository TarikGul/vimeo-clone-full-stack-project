import React from 'react'
import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player'
// import Thumbnail from 'react-thumbnail'

const PostIndexItem = props => {
    console.log('the dolphin has landed')
    console.log(props.post.videoUrl)

    return (
        <div className="post-container">
            {/* <Link></Link>
            <Link></Link> */}
            <div className="post-item">
                <div className="post-video">
                    {/* <ReactPlayer url={props.post.videoUrl}  width={400} height={300}/> */}
                    <img src={props.post.thumbnailUrl} width="261" height="150"/>
                </div>
                {props.post.title}
            </div>
        </div>
    )
}

export default PostIndexItem