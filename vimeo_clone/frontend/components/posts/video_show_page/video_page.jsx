import React from 'react'
import VideoViewportContainer from './video_viewport_container'

class VideoPage extends React.Component {
    constructor(props) {
        super(props)

    }
    
    render() {
        const { postId, entities } = this.props
        
        return (
            <div className="showpage-video-container">
                <VideoViewportContainer videoUrl={entities.posts[postId].videoUrl}/>
            </div>
        )
    }
}

export default VideoPage;