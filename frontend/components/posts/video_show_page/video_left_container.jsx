import React from 'react'
import TitleContainer from './video_left_title_container'
import VideoLeftInfo from './video_left_info'
import CommentFormContainer from '../../comments/comments_container'
import CommentItem from '../../comments/comment_item'

class VideoLeftContainer extends React.Component {
    constructor(props) {
        super(props)

    }



    render() {
        const { 
            postId, 
            sessionId, 
            entities, 
        } = this.props

        const retreiveComments = (arr, object) => {
            let comments = []
            for(let i = 0; i < arr.length; i++) {
                if (object[arr[i]].post_id.toString() === postId) {
                    comments.push(object[arr[i]])
                }
            }
            return comments
        }
        const commentKeys = Object.keys(entities.comments)
        const comments = retreiveComments(commentKeys, entities.comments)
        const userId = Object.keys(entities.users)
        return (
            <div className="video-left-container">
                <TitleContainer
                    sessionId={sessionId}/>
                <VideoLeftInfo 
                    sessionId={sessionId}
                    postId={postId}
                    entities={entities} />
                <div className="amount-of-comments">
                    {comments.length + ' Comments'}
                </div>
                {
                    comments.map((comment, i) => {
                        return (
                            <CommentItem
                                key={`comment-${i}`}
                                currentUser={this.props.entities.users[userId[0]]}
                                comment={comment}/>
                        )
                    })
                }
                <CommentFormContainer 
                    postId={this.props.postId}/>
            </div>
        )
    }
}

export default VideoLeftContainer