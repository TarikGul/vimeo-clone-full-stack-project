import React from 'react'
import { timeSince } from '../../../util/date_api_util'

class PostInfoRow extends React.Component {
    constructor(props) {
        super(props)

    }

    // The checkbox here needs to be used to delete posts

    render() {
        const date = new Date(this.props.post.created_at)
        return (
            <div className="manage-video-row">
                <div className="manage-video-row-left-container">
                    <div className="checkbox-container">
                        <input className="checkbox-manage-videos" type="checkbox" checked={this.props.clicked}/>
                    </div>
                    <div className="manage-video-thumbnail-container">
                        <img className="manage-video-thumbnail" src={this.props.post.thumbnailUrl} />
                    </div>
                    <div className="manage-video-title-name">
                        {this.props.post.title}
                    </div>
                </div>
                <div className="manage-video-row-right-container">
                    <div className="manage-video-password-protected">
                        {
                            this.props.post.passwordProtected
                            ?
                            (
                                'Private Video'
                            ) : (
                                'Anyone'
                            )
                        }
                    </div>
                    <div className="manage-video-password-date-modified">
                        {timeSince(date)}
                    </div>
                </div>
            </div>
        )
    }
}

export default PostInfoRow