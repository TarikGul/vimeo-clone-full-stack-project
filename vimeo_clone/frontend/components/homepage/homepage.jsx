import React from 'react'
import PostIndex from '../posts/post_index'
import { Link } from 'react-router-dom'
import Carousel from './carousel/carousel'
import SidebarButtonBox from './sidebar_button_box'

class Homepage extends React.Component {
    constructor(props) {
        super(props)
        this.links = {
            newVideo: 'newVideo',
            showPage: `:id`
        }
    }

    componentDidMount() {
        this.props.fetchPosts().then(() => {
            $('.video-feed-posts').flickity({
                cellAlign: 'left',
                groupCells: true,
                draggable: false
            });
        })
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
                        {/*Make this into its own component */}
                        <div className="navigation-links">
                            <SidebarButtonBox />
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
                            <Carousel posts={this.props.posts} ownProps={this.props.ownProps}/>
                            <div className="right-linear-gradient">
                                {' '}
                            </div>
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