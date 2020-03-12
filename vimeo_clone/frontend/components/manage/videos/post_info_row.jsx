import React from 'react'
import { timeSince } from '../../../util/date_api_util'

class PostInfoRow extends React.Component {
    constructor(props) {
        super(props)



        this.reRoute = this.reRoute.bind(this)
    }

    reRoute(e) {
        e.preventDefault()
    
        this.props.ownProps.history.push(`/posts/${this.props.post.id}`)
    }

    // The checkbox here needs to be used to delete posts

    render() {
        const date = new Date(this.props.post.created_at)
        return (
            <div className="manage-video-row" >
                <div className="manage-video-row-left-container">
                    <div className="checkbox-container">
                        {
                            this.props.clicked
                            ?
                            (
                                    <input data={"hello" + this.props.post.id}
                                           className="checkbox-manage-videos"
                                           type="checkbox" 
                                           onClick={this.props.handleClick} 
                                           checked={this.props.clicked} />
                            ) : (
                                    <input data-val={this.props.post.id}
                                           className="checkbox-manage-videos" 
                                           type="checkbox" 
                                           onClick={this.props.handleClick} 
                                           checked={null} />
                            )
                        }
                    </div>
                    <div className="manage-video-thumbnail-container" onClick={this.reRoute}>
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