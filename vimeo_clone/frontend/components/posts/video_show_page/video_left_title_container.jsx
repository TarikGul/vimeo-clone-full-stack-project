import React from 'react'

const TitleContainer = props => {
    return (
        <div className='video-title-container'>
            <div className='post-title'>
                {props.entities.posts[props.postId].title}
            </div>
            
        </div>
    )
}

export default TitleContainer;