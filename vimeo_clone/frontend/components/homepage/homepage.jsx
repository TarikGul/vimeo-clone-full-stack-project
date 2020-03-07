import React from 'react'
import PostIndex from '../posts/post_index'
import { Link } from 'react-router-dom'

class Homepage extends React.Component {
    constructor(props) {
        super(props)
        this.links = {
            newVideo: 'newVideo',
            showPage: `:id`
        }
    }

    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        if (this.props.posts.length !== 0) {
            return (
                <div className="page-container">
                    <div className="side-navbar-container-left">
                        <div className='new-video-button-container'>
                            <button className='new-video-button'>
                                <div className='unicode-sidebar-new-video-button'>
                                    {'\u002B'}
                                </div>  
                                <div className="new-video-button-name">
                                     New Video
                                </div>
                            </button>
                        </div>
                        <div className="navigation-links">
                            <button>Home</button>
                            <button>Videos</button>
                            <button>Create</button>
                            <button>Live events</button>
                            <button>Showcases</button>
                        </div>
                        <div className="available-storage">

                        </div>
                    </div>
                    <div className="main-container-right">
                        <div className="page-name">
                            Home
                        </div>
                        <div className='feed-container'>
                            <div className="my-feed-container-name"> My Feed</div>
                            <PostIndex posts={this.props.posts} />
                        </div>
                    </div>
                </div>
            )
        }
        else if (this.posts === undefined) {
            return null
        }
    }
}

export default Homepage;