import React from 'react'
import VideoViewport from './video_viewport'

const VideoViewportContainer = props => {
    return (
        <div className="video-viewport-container">
            <VideoViewport videoUrl={props.videoUrl}/>
        </div>
    )
}

export default VideoViewportContainer