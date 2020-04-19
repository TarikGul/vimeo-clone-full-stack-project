import React from 'react';
import ReactGA from 'react-ga';
import Carousel from './carousel/carousel';
import SidebarButtonBox from './sidebar_button_box';
import UserRecentPostsContainer from '../posts/user_recent_posts/user_recent_posts_container';

class Homepage extends React.Component {
    constructor(props) {
        super(props)
        this.links = {
            newVideo: 'newVideo',
            showPage: `:id`
        }
    }

    componentDidMount() {
        if (window.location.hostname !== 'localhost') {
            ReactGA.initialize('UA-162754702-1');
            ReactGA.pageview('/home');
        }
        const { posts, sessionId, entities } = this.props;
        if (Object.values(posts).length >= 1) {
            $('.video-feed-posts').flickity({
                cellAlign: 'left',
                groupCells: true,
                draggable: false
            });
        } else {
            this.props.fetchPosts().then(() => {
                $('.video-feed-posts').flickity({
                    cellAlign: 'left',
                    groupCells: true,
                    draggable: false
                });
            });
        }; 
        if (entities.users[sessionId].user_posts === undefined) {
            this.props.fetchUser(sessionId)
        }
    };


    render() {
        if (this.props.posts.length !== 0) {
            return (
                <div className="page-container">
                    <SidebarButtonBox ownProps={this.props.ownProps}/>
                    <div className="main-container-right">
                        <div className="page-name">
                            Home
                        </div>
                        <UserRecentPostsContainer />
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
        };
    };
}

export default Homepage;