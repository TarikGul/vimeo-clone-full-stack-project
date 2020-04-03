import React from 'react'
import VideoViewportBox from './video_viewport_box'
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
                <VideoViewportBox videoUrl={entities.posts[postId].videoUrl}/>
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