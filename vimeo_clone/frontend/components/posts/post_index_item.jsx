import React from 'react'
import { Link } from 'react-router-dom'

const PostIndexItem = props => {
    return (
        <li>
            <Link></Link>
            <Link></Link>
            <div>This is your item {props.post.title}</div>
        </li>
    )
}

export default PostIndexItem