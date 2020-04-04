import React from 'react';
import NewVideoBox from './new_video'

class UserRecentPosts extends React.Component {
    constructor(props) {
        super(props)

    }

    sortByDate(arr) {
        const sortedArr = arr.slice().sort((a, b) => b.created_at - a.created_at)
        return sortedArr
    }

    parsePosts(posts, sessionId) {
        let userPosts = [];
        const keys = Object.keys(posts);

        keys.forEach((k) => {
            if (posts[k].user_id === sessionId) {
                userPosts.push(posts[k])
            }
        });
        return this.sortByDate(userPosts);
    }

    render() {
        const { history, entities, sessionId } = this.props 
        console.log(this.parsePosts(entities.posts, sessionId))
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