import React from 'react'
import ReactPlayer from 'react-player'


const VideoViewport = props => {
    const { sessionId, createPlay, match, entities, history, ui } = props
    let autoplay;
    if (ui.autoplay === true || (typeof Boolean === ui.autoplay && ui.autoplay == true)) {
        autoplay = true;
    } else {
        autoplay = false;
    }

    const onEnded = (postId, sessionId) => {
        createPlay({ post_id: postId, user_id: sessionId })
        if (ui.autoplay === true || (typeof Boolean === ui.autoplay && ui.autoplay == true) ) {           
            const length = Object.keys(entities.posts).length;
            const postId = Math.floor(Math.random(length) * Math.floor(length))
            history.push(`/posts/${postId}`)
        }
    }

    return (
        <div className="video-viewport">
            <ReactPlayer 
                width='100%'
                height='110%'
                volume={0}
                className='video-player'
                url={props.videoUrl} 
                onEnded={() => onEnded(parseInt(match.params.postId), sessionId)}
                playing={autoplay}
                controls/>
        </div>
    ) 
}

export default VideoViewport