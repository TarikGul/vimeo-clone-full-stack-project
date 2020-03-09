import React from 'react'
import HomeNavbar from '../main_navbar/main_navbar'
import VideoPage from './video_show_page/video_page'
import ReactPlayer from 'react-player'

class PostShow extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        // debugger
        this.props.fetchPost(this.props.postId)
        // debugger
    }


    render() {
        debugger
        if (this.props.postId === undefined) {
            return null
        } else if (this.props.state.entities.posts[this.props.postId] === undefined) {
            return null
        }
        console.log(this.props)
        debugger
        return (
            <div>
                <HomeNavbar 
                    processForm={this.props.processForm} 
                    ownProps={this.props.ownProps}/>
                {/* <VideoPage entities={this.props.state.entities}/> */}
                <ReactPlayer url={this.props.state.entities.posts[this.props.postId].videoUrl} controls/>
            </div>
        )
    }
}

export default PostShow