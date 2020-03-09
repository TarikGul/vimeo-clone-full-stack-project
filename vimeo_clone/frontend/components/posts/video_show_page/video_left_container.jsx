import React from 'react'
import TitleContainer from './video_left_title_container'
import VideoLeftInfo from './video_left_info'

class VideoLeftContainer extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        console.log(this.props)
        return (
            <div className="video-left-container">
                <TitleContainer 
                    postId={this.props.postId}
                    entities={this.props.entities} />

                <VideoLeftInfo />
            </div>
        )
    }
}

export default VideoLeftContainer