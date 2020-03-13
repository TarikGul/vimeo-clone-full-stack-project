import React from 'react'
import _ from 'lodash'
import FollowButton from './follow_button'

const parseDate = (date) => {
    let splitDate = date.split('')

    let newDate = splitDate.slice(0, 10)
    return newDate.join('')
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
            <div className='follow-user-container'>
                <img className="profile-icon-img" src="/profile_icon.png" alt="" />
                <div className="button-follower-container-for-title title-icon">
                    <div className='uploader-username-container'>
                        {_.capitalize(prop.uploader.username)}
                    </div>
                    <FollowButton />
                </div>
            </div>
        </div>
    )
}

export default TitleContainer;