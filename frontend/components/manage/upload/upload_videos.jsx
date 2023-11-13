import React from 'react';
import SidebarButtonBox from '../../homepage/sidebar_button_box';
import HomeNavbar from '../../main_navbar/main_navbar';
import PostFormContainer from './post_form_container';

const UploadVideos = props => {

    return (
        <div className="upload-video-container">
            <HomeNavbar
                processForm={props.processForm}
                ownProps={props.ownProps} />
            <SidebarButtonBox ownProps={props.ownProps} />
            <PostFormContainer />
        </div>
    )
}

export default UploadVideos