import React from 'react'
import PostIndexItem from './post_index_item'

class PostIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        // debugger
        const { posts } = this.props

        const tempGrid = posts => {
            let postKeys = Object.keys(posts)
            const postPairs = []
            let i = 0
            while (i < postKeys.length - 1) {
                postPairs.push([posts[postKeys[i]], posts[postKeys[i + 1]]])
                i+=2
            }
            console.log(postPairs)
            return postPairs
        }
        const grid = tempGrid(posts)
        return (
            <div className="video-feed-posts">
                {
                    grid.map((post, i) => {
                        return  <div className="grid-duple" id={`grid-${i}`}>
                                    <PostIndexItem 
                                        post={post[0]}
                                        key={post[0].id}
                                    />
                                    <PostIndexItem
                                        post={post[1]}
                                        key={post[1].id}
                                    />
                                </div>
                    })
                }
            </div>

        ) 
    }
}

export default PostIndex