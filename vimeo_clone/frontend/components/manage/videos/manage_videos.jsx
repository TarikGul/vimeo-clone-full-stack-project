import React from 'react'
import HomeNavbar from '../../main_navbar/main_navbar'
import SidebarButtonBox from '../../homepage/sidebar_button_box'

class ManageVideos extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div className="manage-videos-container">
                <HomeNavbar />
                <SidebarButtonBox />
                
            </div>
        )
    }
}

export default ManageVideos