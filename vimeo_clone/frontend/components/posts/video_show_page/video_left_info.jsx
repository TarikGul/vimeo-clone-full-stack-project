import React from 'react'

class VideoLeftInfo extends React.Component {
    constructor(props) {
        super(props)


    }

    render() {
        const { entities, postId } = this.props
        // debugger
        const retreiveComments = (arr, object) => {
            let comments = []
            for (let i = 0; i < arr.length; i++) {
                if (object[arr[i]].post_id.toString() === postId) {
                    comments.push(object[arr[i]])
                }
            }
            return comments
        }
        const commentKeys = Object.keys(this.props.entities.comments)
        const commentsLength = retreiveComments(commentKeys, this.props.entities.comments).length
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