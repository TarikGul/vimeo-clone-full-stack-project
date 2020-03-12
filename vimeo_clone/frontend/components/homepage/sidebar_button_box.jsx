import React from 'react'
import SidebarButton from './sidebar_button'

class SidebarButtonBox extends React.Component {
    constructor(props) {
        super(props)

    }
    render() {
        const routes = [
            "/home",
            "/manage/videos",
            "/manage/upload",
            "/manage/live_events",
            "/manage/showcases"
        ]
        const images = [
            "assets/home-button.png", 
            "assets/video-button.png",
            "assets/create-video-button.png",
            "assets/camera-button.png",
            "assets/showcase-button.png" 
        ];
        const name = [
            "Home",
            "Videos",
            "Upload",
            "Life events",
            "Showcases"
        ]; 
        const counter = [0, 1, 2, 3, 4];
        return (
            <div className="side-navbar-container-left">
                <div className='new-video-button-container'>
                    <button className='new-video-button'>
                        <div className='unicode-sidebar-new-video-button'>
                            {'\u002B'}
                        </div>
                        <div className="new-video-button-name">
                            New Video
                                </div>
                    </button>
                </div>
                {/*Make this into its own component */}
                <div className="navigation-links">
                    <div className="homepage-sidebar-container">
                        {
                            counter.map(i => {
                                return <SidebarButton
                                    key={`sidebar-button-${i}`}
                                    ownProps={this.props.ownProps}
                                    imgUrl={images[i]}
                                    buttonName={name[i]}
                                    route={routes[i]}
                                />
                            })
                        }
                    </div>
                </div>
                <div className="available-storage">

                </div>
            </div>
        )
    }
}

export default SidebarButtonBox;