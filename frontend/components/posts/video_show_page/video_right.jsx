import React from 'react';
import VideoShowItem from './video_show_item';
import ToggleButtonContainer from './toggle_container';

class VideoRight extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            index: 7,
            postId: this.props.postId
        }
        
        this.handleClick= this.handleClick.bind(this)    
    }

    //This handle click allows the video show bar on the right to refresh
    //on every show page. 
    handleClick(e) {
        e.preventDefault()

        this.setState(prevState => ({
            index: prevState.index + 5,
            postId: this.props.postId
        }));
    };

    sortVideos(posts) {
        const { match } = this.props;
        let newOrder = [];
        let curPost = [];
        
        for(let i = 0; i < posts.length; i++) {
            if (posts[i].id.toString() === match.params.postId) {
                curPost.push(posts[i])
            } else {
                newOrder.push(posts[i])
            };
        };
        return curPost.concat(newOrder)
    }

    render() {
        const { postId, entities } = this.props;
        const userId = Object.keys(entities.users)[0];
        const uploaderState = entities.posts[postId].uploaderPosts;
        //Conditional to check if the props has been full updated or not
        if (uploaderState === undefined) {
            return null
        };

        // This is the posters username
        const uploaderUsername = entities.posts[postId].uploader.username
        
        //This is to map out the uploads of the users current show page so that 
        //they can see all the related videos on the side bar.
        // Ordered posts make sure that the first posts is the post that you 
        // are currently on
        const keys = Object.keys(uploaderState);
        const collectionOfPosts = keys.map(key => uploaderState[key]);
        const orderedPosts = this.sortVideos(collectionOfPosts)
        const uploaderSliceOfState = orderedPosts.slice(0, this.state.index);
        return (
            <div className="video-right-top-container">
                <div className="video-right-inner-container">
                <div className="more-from-this-user">More from this user</div>
                <ToggleButtonContainer />
                    <div className="video-right-thumbnail-title-container">
                        {
                            
                            uploaderSliceOfState.map((post, i) => {
                                return <VideoShowItem
                                    playingPostId={this.props.postId}
                                    clickHandler={this.props.clickHandler}
                                    ownProps={this.props.ownProps}
                                    key={`post-show-${i}`}
                                    user={entities.users[userId]}
                                    post={post}
                                    username={uploaderUsername}/>
                            })
                        }
                    </div>
                </div>
                <div className="show-more-videos-container-outer">
                    <div className="show-more-space-holder">
                        {' '}
                    </div>

                    {
                        this.state.index <= keys.length
                        ?
                        (
                            <div className=".show-more-videos-container-inner">
                                <button
                                    onClick={this.handleClick}
                                    className="show-more-videos">
                                    Show more...
                                </button>
                            </div>
                        ) : (
                            null
                        )
                    }
                    
                </div>
            </div>
        )
    }
}

export default VideoRight;