import React from 'react'
import HomeNavbar from '../main_navbar/main_navbar'
import VideoPage from './video_show_page/video_page'
import { scrollToTop } from '../../util/window_util'
import Footer from '../footer/footer'

class PostShow extends React.Component {
    constructor(props) {
        super(props)

        this.clickHandler = this.clickHandler.bind(this)
    }

    componentDidMount() {
        this.props.fetchPost(this.props.postId)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.ownProps.location.pathname !== this.props.ownProps.location.pathname) {
            scrollToTop();
        }
    }

    clickHandler(postId) {
       return () => this.props.fetchPost(postId)
                        .then(() => {
                            this.props.ownProps.history.push(`/posts/${postId}`)
                        })
    }
    

    render() {
        const { 
            processForm,
            ownProps,
            session,
            state,
            postId
        } = this.props
        
        if (this.props.postId === undefined) {
            return null
        } else if (this.props.state.entities.posts[this.props.postId] === undefined) {
            return null
        }
        return (
            <div className="showpage-container">
                <HomeNavbar 
                    processForm={processForm} 
                    ownProps={ownProps}/>
                <VideoPage
                    sessionId={session.id}
                    clickHandler={this.clickHandler} 
                    ownprops={ownProps}
                    entities={state.entities} 
                    postId={postId}/>
                <Footer />
            </div>
        )
    }
}

export default PostShow