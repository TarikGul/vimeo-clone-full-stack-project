import React from 'react'
import VideoViewportContainer from './video_viewport_container'
import VideoBottomContainer from './video_bottom_container'

class VideoPage extends React.Component {
    constructor(props) {
        super(props)

    }
    
    render() {
        const { 
            postId, 
            entities, 
            sessionId,
            clickHandler,
            ownProps 
        } = this.props
        return (
            <div className="showpage-video-container">
                <VideoViewportContainer videoUrl={entities.posts[postId].videoUrl}/>
                <VideoBottomContainer
                    sessionId={sessionId}
                    clickHandler={clickHandler}
                    ownProps={ownProps}
                    entities={entities} 
                    postId={postId}/>
            </div>
        )
    }
}

export default VideoPage;