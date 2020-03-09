import React from 'react'
import TitleContainer from './video_left_title_container'
import VideoLeftInfo from './video_left_info'
import CommentFormContainer from '../../comments/comments_container'

class VideoLeftContainer extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {

        return (
            <div className="video-left-container">
                <TitleContainer 
                    postId={this.props.postId}
                    entities={this.props.entities} />

                <VideoLeftInfo />
                <CommentFormContainer 
                    postId={this.props.postId}/>
            </div>
        )
    }
}

export default VideoLeftContainer