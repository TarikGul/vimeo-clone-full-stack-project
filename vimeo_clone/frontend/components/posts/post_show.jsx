import React from 'react'
import HomeNavbar from '../main_navbar/main_navbar'
import VideoPage from './video_show_page/video_page'
import ReactPlayer from 'react-player'

class PostShow extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        this.props.fetchPost(this.props.postId)
    }


    render() {
        if (this.props.postId === undefined) {
            return null
        } else if (this.props.state.entities.posts[this.props.postId] === undefined) {
            return null
        }
        debugger
        return (
            <div className="showpage-container">
                <HomeNavbar 
                    processForm={this.props.processForm} 
                    ownProps={this.props.ownProps}/>
                <VideoPage entities={this.props.state.entities} postId={this.props.postId}/>
            </div>
        )
    }
}

export default PostShow