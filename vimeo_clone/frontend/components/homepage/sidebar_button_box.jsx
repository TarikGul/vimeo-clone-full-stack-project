import React from 'react'
import SidebarButton from './sidebar_button'
import AvailableStorageContainer from './available_storage_container';

class SidebarButtonBox extends React.Component {
    constructor(props) {
        super(props)

        this.reRoute = this.reRoute.bind(this)
    }

    componenDidMount() {
        
    }

    reRoute() {
        const { ownProps } = this.props;

        ownProps.history.push('/manage/upload')
    }

    render() {
        const routes = [
            "/home",
            "/manage/videos",
            "/manage/upload",
        ]
        const images = [
            "/home-button.png", 
            "/video-button.png",
            "/create-video-button.png",
        ];
        const name = [
            "Home",
            "Videos",
            "Upload",
        ]; 
        const counter = [0, 1, 2];
        return (
            <div className="side-navbar-container-left">
                <div className='new-video-button-container'>
                    <button
                        onClick={this.reRoute} 
                        className='new-video-button'>
                        <div className='unicode-sidebar-new-video-button'>
                            {'\u002B'}
                        </div>
                        <div className="new-video-button-name">
                            New Video
                        </div>
                    </button>
                </div>
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
                <AvailableStorageContainer />
            </div>
        )
    }
}

export default SidebarButtonBox;