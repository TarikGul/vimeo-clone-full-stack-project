import React from 'react'

class VideoLeftInfo extends React.Component {
    constructor(props) {
        super(props)


    }

    render() {
        const { entities, postId } = this.props
        // debugger
        const commentsLength = Object.keys(entities.comments).length
        return (
            <div className="video-left-info-container">
                <div className="inner-info-top-container">
                    <div className="likes-info"> 14.2k </div>
                    <div className="plays-info"> 532 </div>
                    <div className="comments-info"> {commentsLength} </div>
                </div>
                <div className="description-info">
                    {entities.posts[postId].description}
                </div>
            </div>
        )
    }
}

export default VideoLeftInfo;