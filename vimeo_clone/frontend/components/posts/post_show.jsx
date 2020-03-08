import React from 'react'
import { fetchPost } from '../../actions/post_actions'
import HomeNavbar from '../main_navbar/main_navbar'

class PostShow extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        // debugger
        this.props.fetchPost(this.props.postId)
    }

    render() {
        // debugger
        if (this.props.postId === undefined) {
            return null
        }
        return (
            <div>
                <HomeNavbar />
            </div>
        )
    }
}

export default PostShow