import React from 'react';
import LikeButtonContainer from '../../likes/likes_container';
import PlaysContainer from '../../plays/plays_container';

class VideoLeftInfo extends React.Component {
    constructor(props) {
        super(props)


    }

    render() {
        const { entities, postId } = this.props
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
                    <PlaysContainer />
                    <LikeButtonContainer />
                    <div className="comments-info"> 
                        <img className="comments-i" src="/comment-button.svg" width="18" height="18"/>
                        <div className="comments-text">
                            {commentsLength} 
                        </div>
                    </div>
                </div>
                <div className="description-info">
                    {entities.posts[postId].description}
                </div>
            </div>
        )
    }
}

export default VideoLeftInfo;