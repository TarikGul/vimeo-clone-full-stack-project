import React from 'react'

const parseDate = (date) => {
    let splitDate = date.split('')

    let newDate = splitDate.slice(0, 10)
    return newDate.join('')
}

const capitalizeUsername = name => {
    
}

const TitleContainer = props => {
    const prop = props.entities.posts[props.postId]
    if (prop.uploader === undefined) {
        return null
    }
    return (
        <div className='video-title-container'>
            <div className='post-title'>
                {prop.title}
            </div>
            <div className='uploaded-date'>
                {`Uploaded on ${parseDate(prop.created_at)}`}
            </div>
            <div className='uploader-username-container'>
                {prop.uploader.username}
            </div>
        </div>
    )
}

export default TitleContainer;