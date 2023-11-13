import React from 'react'
import VideoViewportContainer from './video_viewport_container'

const VideoViewportBox = props => {
    return (
        <div className="video-viewport-container">
            <VideoViewportContainer videoUrl={props.videoUrl}/>
        </div>
    )
}

export default VideoViewportBox;