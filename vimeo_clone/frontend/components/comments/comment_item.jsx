import React from 'react'
import { timeSince } from '../../util/date_api_util'
import _ from 'lodash'

class CommentItem extends React.Component {
    constructor(props) {
        super(props)

    }


    render() {
        if (this.props === undefined) {
            return null
        }
        const date = new Date(this.props.comment.created_at)
    
        return (
            <div className="comment-container">
                <div className='comment-author-date-container'>
                    <div className="space-container"></div>
                    {
                        this.props.comment.user
                        ?
                        (
                            <div className="comment-author">
                                {_.capitalize(this.props.comment.user.username)}
                            </div>
                        ) : (
                            <div className="comment-author">
                                {_.capitalize(this.props.currentUser.username)}
                            </div>
                        )
                    }
                    
                    <div className="comment-date">
                        {timeSince(date)}
                    </div>
                </div>
                <div className='profile-body-container'>
                    <div className="user-picture-comments">
                        <img className="profile-icon-img" src="assets/profile_icon.png" alt=""/>
                    </div>
                    <div className="comment-body">
                        {this.props.comment.body}
                    </div>
                </div>
            </div>
        )
    }
}
export default CommentItem