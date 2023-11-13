import React from 'react'
import VideoLeftContainer from './video_left_container'
import VideoRightContainer from './video_right_container'

class VideoBottomContainer extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        const { 
            sessionId, 
            postId, 
            entities, 
            clickHandler,  
            ownProps
        } = this.props

        return (
            <div className="showpage-bottom-container">
                <VideoLeftContainer
                    sessionId={sessionId} 
                    postId={postId}
                    entities={entities}/>
                <VideoRightContainer
                    clickHandler={clickHandler}
                    ownProps={ownProps} 
                    postId={postId}/>
            </div>
        )
    }
}

export default VideoBottomContainer