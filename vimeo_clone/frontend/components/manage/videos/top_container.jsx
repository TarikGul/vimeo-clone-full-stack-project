import React from 'react'

class TopContainer extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        const { userId, entities } = this.props
        // Sanity check to make sure that the prop is passed down before we 
        // render the page
        if (userId === null) {
            return null
        } else if (entities.users[userId].user_posts === undefined){
            return null
        }
        const userPostsKeys = Object.keys(entities.users[userId].user_posts)
        return (
            <div className="manage-video-top-container">
                <div className="manage-video-top-inner-container">
                    <div className="left-inner-container">
                        <div className="left-inner-container-name">
                            Videos
                        </div>
                        <div className="left-inner-container-number-of-videos">
                            {`${userPostsKeys.length} items`}
                        </div>
                    </div>
                </div>
            </div>
        ) 
    }
}

export default TopContainer