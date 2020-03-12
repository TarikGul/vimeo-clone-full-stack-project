import React from 'react'
import HomeNavbar from '../../main_navbar/main_navbar'
import SidebarButtonBox from '../../homepage/sidebar_button_box'
import VideoContentContainer from './video_content_container'

class ManageVideos extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        this.props.fetchUser(this.props.state.session.id)
    }

    // Need a conditional that states if the current user has no videos then 
    // The upload video splash for this link needs to show up otherwise 
    // The users videos show up and they can edit or delete them. 
    render() {
        return (
            <div className="manage-videos-container">
                <HomeNavbar 
                    processForm={this.props.processForm}
                    ownProps={this.props.ownProps}/>
                <SidebarButtonBox ownProps={this.props.ownProps}/>
                <VideoContentContainer
                    deletePost={this.props.deletePost}
                    fetchUser={this.props.fetchUser}
                    userId={this.props.state.session.id} 
                    entities={this.props.state.entities}
                    ownProps={this.props.ownProps} />/>
            </div>
        )
    }
}

export default ManageVideos