import React from 'react'
import TitleContainer from './video_left_title_container'
import VideoLeftInfo from './video_left_info'
import CommentForm from '../../comments/comments_form'

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
                <CommentForm />
            </div>
        )
    }
}

export default VideoLeftContainer