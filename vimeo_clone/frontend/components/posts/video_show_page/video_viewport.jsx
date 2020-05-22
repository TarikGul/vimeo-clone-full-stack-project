import React from 'react'
import ReactPlayer from 'react-player'


const VideoViewport = props => {
    const { sessionId, createPlay, match, entities, ui } = props

    const onEnded = (postId, sessionId) => {
        createPlay({ post_id: postId, user_id: sessionId })
        if (ui.autoplay === true) {

        }
    }
    return (
        <div className="video-viewport">
            <ReactPlayer 
                width='100%'
                height='110%'
                className='video-player'
                url={props.videoUrl} 
                onEnded={() => onEnded(parseInt(match.params.postId), sessionId)}
                playing={ui.autoplay}
                controls/>
        </div>
    ) 
}

export default VideoViewport