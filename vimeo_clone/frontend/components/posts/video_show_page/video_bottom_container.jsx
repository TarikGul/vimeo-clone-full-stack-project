import React from 'react'
import VideoLeftContainer from './video_left_container'
import VideoRightContainer from './video_right_container'

class VideoBottomContainer extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div className="showpage-bottom-container">
                <VideoLeftContainer 
                    postId={this.props.postId}
                    entities={this.props.entities}/>
                <VideoRightContainer 
                    postId={this.props.postId}
                    entities={this.props.entities}/>
            </div>
        )
    }
}

export default VideoBottomContainer