import React from 'react'
import VideoShowItem from './video_show_item'

class VideoRightContainer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            index: 5
        }
    }

    render() {
        const { postId, entities } = this.props
        const userId = Object.keys(entities.users)[0]
        const uploaderState = entities.posts[postId].uploaderPosts
        const keys = Object.keys(uploaderState)
        const collectionOfPosts = keys.map(key => uploaderState[key])
        const uploaderSliceOfState = collectionOfPosts.slice(0, this.state.index)
        console.log("this is from video right container", this.props)
        return (
            <div className="video-right-top-container">
                <div className="video-right-inner-container">
                <div className="more-from-this-user">More from this user</div>
                    <div className="video-right-thumbnail-title-container">
                        {
                            
                            uploaderSliceOfState.map((post, i) => {
                                return <VideoShowItem 
                                key={`post-show-${i}`}
                                user={entities.users[userId]}
                                post={post}/>
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default VideoRightContainer;