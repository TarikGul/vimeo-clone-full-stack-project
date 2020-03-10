import React from 'react'

const parseStringTitle = (title) => {
    const arrTitle = title.split('')
    if (title.length > 12) {
        return arrTitle.slice(0, 12).push('...').join('')
    } else {
        return title
    }
}

const VideoShowItem = props => {
    const { post, user } = props
    console.log("this is the props from the Videoshowitem" ,props)
    return (
        <div className="user-posts-sidebar-container">
            <div className="thumbnail-container">
                <img 
                    className="user-posts-show-page-thumbnail"
                    src={post.thumbnailUrl} />
            </div>
            <div className="video-right-title-username-container">
                <div className="video-right-title-container">
                    {parseStringTitle(post.title)}
                </div>
                <div className="video-right-username-container">
                    {user.username}
                </div>
            </div>
        </div>
    )
}

export default VideoShowItem