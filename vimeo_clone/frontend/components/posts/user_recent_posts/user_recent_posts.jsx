import React from 'react';
import NewVideoBox from './new_video'

class UserRecentPosts extends React.Component {
    constructor(props) {
        super(props)

    }
    render() {
        const { history } = this.props 
        return (
            <div className="recent-posts-main-container">
                <div className="recent-videos-title-container">
                    <div className="recent-videos-title">
                        Recent Videos
                    </div>
                </div>
                <div className="recent-posts-container">
                    <NewVideoBox history={history}/>
                </div>
            </div>
        )
    }
}

export default UserRecentPosts;