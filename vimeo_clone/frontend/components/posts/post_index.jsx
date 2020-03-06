import React from 'react'
import PostIndexItem from './post_index_item'

class PostIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchPosts()
    }

    render() {
        // debugger
        const { posts } = this.props
        return (
            <div>
                <ul>
                    {
                        posts.map(post => {
                            return <PostIndexItem
                                post={post}
                                key={post.id}
                                />
                        })
                    }
                </ul>
            </div>
        ) 
    }
}

export default PostIndex