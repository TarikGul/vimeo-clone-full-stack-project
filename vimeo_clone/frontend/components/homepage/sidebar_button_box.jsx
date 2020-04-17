import React from 'react'
import SidebarButton from './sidebar_button'
import AvailableStorageContainer from './available_storage_container';

class SidebarButtonBox extends React.Component {
    constructor(props) {
        super(props)

        this.reRoute = this.reRoute.bind(this)
        this.routePortfolio = this.routePortfolio.bind(this)
    }

    routePortfolio(field) {
        if(field === 'github') {
            window.location.href = 'https://github.com/TarikGul'
        } else if(field === 'linkedin') {
            window.location.href = 'https://www.linkedin.com/in/tarik-gul-6497b21a4/'
        }
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
                <div className="side-navbar-container-left-inner">
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
                    <div className="github-box">
                        <div className="github-box-inner">
                            <div className="github-linkedin-title">
                                Github / LinkedIn
                            </div>
                            <div className="button-container-git-link">
                                <button onClick={() => this.routePortfolio('github')} className="sidebar-link-button-git">
                                    <img src="/github-sign.svg" className="sidebar-github-i" />
                                    <div className="github-text-sidebar">
                                        Github
                                    </div>
                                </button>
                                <button onClick={() => this.routePortfolio('linkedin')} className="sidebar-link-button-link">
                                    <img src="/linkedin-logo.svg" className="sidebar-linkedin-i"/>
                                    <div className="linkedin-text-sidebar">
                                        LinkedIn
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <AvailableStorageContainer />
            </div>
        )
    }
}

export default SidebarButtonBox;