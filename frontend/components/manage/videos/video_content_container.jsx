import React from 'react'
import TopContainer from './top_container'
import BottomContainer from './bottom_container'

class VideoContentContainer extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div className='video-content-container'>
                <TopContainer
                    userId={this.props.userId} 
                    entities={this.props.entities}
                    ownProps={this.props.ownProps}/>
                <BottomContainer
                    deletePost={this.props.deletePost}
                    fetchUser={this.props.fetchUser}
                    userId={this.props.userId}  
                    entities={this.props.entities}
                    ownProps={this.props.ownProps} />
            </div>
        )
    }
}

export default VideoContentContainer;