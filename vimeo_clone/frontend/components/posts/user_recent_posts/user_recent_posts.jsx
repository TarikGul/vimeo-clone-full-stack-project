import React from 'react';

class UserRecentPosts extends React.Component {
    constructor(props) {
        super(props)

    }
    
    render() {
        return (
            <div className="recent-posts-container">
                <div className="recent-videos-title-container">
                    <div className="recent-videos-title">
                        Recent Videos
                    </div>
                </div>
                <div className="new-video-box">
                    <img src="/new-video-plus.svg" width="30" height="30"/>
                    <div class="new-video-box-text">
                        New video
                    </div>
                </div>
            </div>
        )
    }
}

export default UserRecentPosts;