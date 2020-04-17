import React from 'react'
import HomeNavbar from '../../main_navbar/main_navbar'
import SidebarButtonBox from '../../homepage/sidebar_button_box'
import VideoContentContainer from './video_content_container'

class ManageVideos extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        const { sessionId, entities } = this.props
        this.props.fetchUser(sessionId)
    }

    // Need a conditional that states if the current user has no videos then 
    // The upload video splash for this link needs to show up otherwise 
    // The users videos show up and they can edit or delete them. 
    render() {
        const { 
            sessionId, 
            entities,
            processForm,
            ownProps,
            deletePost,
            fetchUser 
        } = this.props
        
        return (
            <div className="manage-videos-container">
                <HomeNavbar 
                    processForm={processForm}
                    ownProps={ownProps}/>
                <SidebarButtonBox ownProps={ownProps}/>
                <VideoContentContainer
                    deletePost={deletePost}
                    fetchUser={fetchUser}
                    userId={sessionId} 
                    entities={entities}
                    ownProps={ownProps} />/>
            </div>
        )
    }
}

export default ManageVideos