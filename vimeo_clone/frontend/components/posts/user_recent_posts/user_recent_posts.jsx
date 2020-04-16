import React from 'react';
import NewVideoBox from './new_video';
import PostUserItem from './post_user_item';

class UserRecentPosts extends React.Component {
    constructor(props) {
        super(props)

        this.parsePosts = this.parsePosts.bind(this)
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
                userPosts.push(posts[k]);
            }
        });
        let sorted = this.sortByDate(userPosts);
        return this.reversePosts(sorted);
    }

    reversePosts(arr) {
        let reversedArr = [];

        for(let i = arr.length - 1; i >= 0; i--) {
            reversedArr.push(arr[i]);
        };

        return reversedArr;
    }

    render() {
        const { history, entities, sessionId } = this.props 
        const sortedUserPosts = this.parsePosts(entities.posts, sessionId)

        return (
            <div className="recent-posts-main-container">
                <div className="recent-videos-title-container">
                    <div className="recent-videos-title">
                        Recent Videos
                    </div>
                </div>
                <div className="recents-row">
                    <div className="recent-posts-container">
                        <NewVideoBox history={history}/>
                    </div>
                    {
                        sortedUserPosts.slice(0, 3).map((post, i) => {
                            return <PostUserItem
                                        history={history} 
                                        key={`user-post-${i}`}
                                        post={post}/>
                        })
                    }
                </div>
            </div>
        )
    }
}

export default UserRecentPosts;