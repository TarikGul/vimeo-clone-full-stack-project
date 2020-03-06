import React from 'react'
import PostIndex from '../posts/post_index'

class Homepage extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        if (this.posts === undefined) {
            return null
        }
        debugger
        return (
            <div className="page-container">
                <PostIndex posts={this.props.posts}/>
            </div>
        )
    }
}

export default Homepage;