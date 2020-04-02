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
            ownProps, 
            createFollow, 
            deleteFollow 
        } = this.props

        return (
            <div className="showpage-bottom-container">
                <VideoLeftContainer
                    createFollow={createFollow}
                    deleteFollow={deleteFollow}
                    sessionId={sessionId} 
                    postId={postId}
                    entities={entities}/>
                <VideoRightContainer
                    clickHandler={clickHandler}
                    ownProps={ownProps} 
                    postId={postId}
                    entities={entities}/>
            </div>
        )
    }
}

export default VideoBottomContainer