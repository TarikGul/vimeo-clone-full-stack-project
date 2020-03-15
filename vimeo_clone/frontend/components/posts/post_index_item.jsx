import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import ReactPlayer from 'react-player'
// import Thumbnail from 'react-thumbnail'

class PostIndexItem extends React.Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
    }

    viewGenerator() {
        return Math.floor(Math.random() * 10000)
    }

    handleClick() {
        this.props.ownProps.history.push(`/posts/${this.props.post.id}`)
    }
    render() {
        return (
            <div onClick={this.handleClick} className="post-container">
                <div className="post-item">
                    <div className="post-index-video-group">
                        <div className="video-group-placeholder">
                            Added to
                        </div>
                        <div className="video-group-name-container">
                            <button className="video-group-name">  Video Staff Picks</button>
                        </div>
                    </div>
                    <div className="post-video">
                        <img src={this.props.post.thumbnailUrl} width="261" height="150"/>
                    </div>
                    <div className="show-post-title-and-views-box">
                        <div className="show-post-title-page">
                            {this.props.post.title}
                        </div>
                        <div className="show-post-views">
                            {`${this.viewGenerator()} views`}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostIndexItem