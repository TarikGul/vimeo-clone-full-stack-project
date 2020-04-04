import React from 'react';
import NewVideoBox from './new_video'

class UserRecentPosts extends React.Component {
    constructor(props) {
        super(props)

    }
    
    render() {
        return (
            <div className="recent-posts-main-container">
                <div className="recent-videos-title-container">
                    <div className="recent-videos-title">
                        Recent Videos
                    </div>
                </div>
                <div className="recent-posts-container">
                    <NewVideoBox />
                </div>
            </div>
        )
    }
}

export default UserRecentPosts;