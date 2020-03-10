import React from 'react'

class CommentItem extends React.Component {
    constructor(props) {
        super(props)

    }


    render() {
        if (this.props === undefined) {
            return null
        }
        return (
            <div className="comment-container">
                {
                    this.props.comment.user
                    ?
                    (
                        <div className="comment-author">
                            {this.props.comment.user.username}
                        </div>
                    ) : (
                        <div className="comment-author">
                            {this.props.currentUser.username}
                        </div>
                    )
                }
                
                <div className="comment-date">
                    {this.props.comment.created_at}
                </div>
                <div className="comment-body">
                    {this.props.comment.body}
                </div>
            </div>
        )
    }
}
export default CommentItem