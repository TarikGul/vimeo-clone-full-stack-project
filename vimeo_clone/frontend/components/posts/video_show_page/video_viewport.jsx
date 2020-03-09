import React from 'react'
import ReactPlayer from 'react-player'

const VideoViewport = props => {
    return (
        <div className="video-viewport">
            <ReactPlayer 
                width='100%'
                height='110%'
                className="video-player"
                url={props.videoUrl} 
                controls/>
        </div>
    ) 
}

export default VideoViewport