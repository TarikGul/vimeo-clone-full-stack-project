import React from 'react'
import _ from 'lodash'
import FollowButtonContainer from '../../follows/follow_container'

const parseDate = (date) => {
    let splitDate = date.split('')

    let newDate = splitDate.slice(0, 10)
    return newDate.join('')
}

const parseName = name => {
    let splitName = name.split('')

    let newName = splitName.slice(0, 6).concat(['...'])
    return newName.join('')
}

const Title = props => {
    const { postId, entities, match } = props
    let prop;
    if (entities.posts[props.postId] !== undefined) {
        prop = entities.posts[props.postId]
    } else {
        prop = entities.posts[match.params.postId]
    }
    if (prop.uploader === undefined) {
        return null
    }
    console.log("this is the title container", props)
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
                        {_.capitalize(parseName(prop.uploader.username))}
                    </div>
                    <FollowButtonContainer postId={postId}/>
                </div>
            </div>
        </div>
    )
}

export default Title;