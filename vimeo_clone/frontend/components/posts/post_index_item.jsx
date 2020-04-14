import React from 'react';

class PostIndexItem extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isHovered: false
        }

        this.openFilter = this.openFilter.bind(this)
        this.closeFilter = this.closeFilter.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    openFilter(e) {
        e.preventDefault();

        this.setState({ isHovered: true });
    }

    closeFilter() {
        this.setState({ isHovered: false });
    }

    viewGenerator() {
        return Math.floor(Math.random() * 10000);
    }

    handleClick() {
        this.props.ownProps.history.push(`/posts/${this.props.post.id}`);
    }
    render() {
        const { isHovered } = this.state;
        return (
            <div onClick={this.handleClick} 
                 className="post-container"
                 onMouseEnter={this.openFilter}
                 onMouseLeave={this.closeFilter}>
                    {
                        isHovered ?
                        (
                                <div className="post-item">
                                    <div className="post-index-video-group">
                                        <div className="video-group-placeholder">
                                            Added to
                                        </div>
                                        <div className="video-group-name-container">
                                            <button className="video-group-name">  Video Staff Picks</button>
                                        </div>
                                    </div>
                                    <div className="post-video active-post-item">
                                        <img className="feed-thumbnail opacity" src={this.props.post.thumbnailUrl} />
                                    </div>
                                    <div className="show-post-title-and-views-box">
                                        <div className="show-post-title-page">
                                            {this.props.post.title}
                                        </div>
                                        <div className="show-post-views">
                                            {`${this.props.post.plays} views`}
                                        </div>
                                    </div>
                                </div>
                            
                        ) : (
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
                                        <img className="feed-thumbnail" src={this.props.post.thumbnailUrl} />
                                    </div>
                                    <div className="show-post-title-and-views-box">
                                        <div className="show-post-title-page">
                                            {this.props.post.title}
                                        </div>
                                        <div className="show-post-views">
                                            {`${this.props.post.plays} views`}
                                        </div>
                                    </div>
                                </div>
                        )
                    }
            </div>
        )
    }
}

export default PostIndexItem