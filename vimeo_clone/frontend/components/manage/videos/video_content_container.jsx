import React from 'react'
import TopContainer from './top_container'
import BottomContainer from './bottom_container'

class VideoContentContainer extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        console.log("this s the props from the video content container", this.props)
        return (
            <div className='video-content-container'>
                <TopContainer
                    userId={this.props.userId} 
                    entities={this.props.entities}
                    ownProps={this.props.ownProps}/>
                <BottomContainer
                    fetchUser={this.props.fetchUser}
                    userId={this.props.userId}  
                    entities={this.props.entities}
                    ownProps={this.props.ownProps} />
            </div>
        )
    }
}

export default VideoContentContainer;