import React from 'react';
import SidebarButtonBox from '../../homepage/sidebar_button_box'
import HomeNavbar from '../../main_navbar/main_navbar'

const UploadVideos = props => {

    return (
        <div className="upload-video-container">
            <HomeNavbar
                processForm={props.processForm}
                ownProps={props.ownProps} />
            <SidebarButtonBox ownProps={props.ownProps} />
        </div>
    )
}

export default UploadVideos