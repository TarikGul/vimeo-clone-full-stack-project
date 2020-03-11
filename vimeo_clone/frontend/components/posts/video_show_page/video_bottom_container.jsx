import React from 'react'
import VideoLeftContainer from './video_left_container'
import VideoRightContainer from './video_right_container'

class VideoBottomContainer extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        console.log("this is the bottome container props", this.props)
        return (
            <div className="showpage-bottom-container">
                <VideoLeftContainer 
                    postId={this.props.postId}
                    entities={this.props.entities}/>
                <VideoRightContainer
                    clickHandler={this.props.clickHandler}
                    ownProps={this.props.ownProps} 
                    postId={this.props.postId}
                    entities={this.props.entities}/>
            </div>
        )
    }
}

export default VideoBottomContainer