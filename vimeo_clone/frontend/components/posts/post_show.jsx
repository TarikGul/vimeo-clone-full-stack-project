import React from 'react'
import HomeNavbar from '../main_navbar/main_navbar'
import VideoPage from './video_show_page/video_page'
import Footer from '../footer/footer'

class PostShow extends React.Component {
    constructor(props) {
        super(props)

        this.clickHandler = this.clickHandler.bind(this)
    }

    componentDidMount() {
        this.props.fetchPost(this.props.postId)
        console.log("this is the props in the show page", this.props)
    }



    clickHandler(postId) {
       return () => this.props.fetchPost(postId)
                        .then(() => {
                            this.props.ownProps.history.push(`/posts/${postId}`)
                        })
    }
    

    render() {
        if (this.props.postId === undefined) {
            return null
        } else if (this.props.state.entities.posts[this.props.postId] === undefined) {
            return null
        }

        return (
            <div className="showpage-container">
                <HomeNavbar 
                    processForm={this.props.processForm} 
                    ownProps={this.props.ownProps}/>
                <VideoPage
                    clickHandler={this.clickHandler} 
                    ownprops={this.props.ownProps}
                    entities={this.props.state.entities} 
                    postId={this.props.postId}/>
                <Footer />
            </div>
        )
    }
}

export default PostShow