import React from 'react';
import UserDropdown from './user_dropdown'
import SearchBarContainer from '../search/search_container'
import Dropdown from './home_dropwdown'

class HomeNavbar extends React.Component {
    constructor(props) {
        super(props)
        // this.state = this.props.ownProps
        this.handleProcess = this.handleProcess.bind(this)
        this.reRoute = this.reRoute.bind(this)
    }

    handleProcess(e) {
        e.preventDefault()
        
        if (this.props.location !== undefined) {
            if (this.props.location.pathname === '/home') {
                this.props.processForm()
                .then(()=> (
                    this.props.history.push('/')
                ))
                this.forceUpdate();
            } 
        } else {
            this.props.processForm()
                .then(() => (
                    this.props.ownProps.history.push('/')
                ))
        }
    }

    reRoute() {
        if (this.props.ownProps.location.pathname !== '/home') {
            this.props.ownProps.history.push('/home')
        }
    }
    
    render() {
        return (
        <div className='navbar-container-1'>
            <div className="navbar-top-rainbow"></div>
            <div className='navbar-container-2'>

                <div className='navbar-container-sub'>
                    <div className="navbar-container-left">
                        <div className='vimeo-logo-button'>
                                <img onClick={this.reRoute}className='logo-img' src='/bimeoJP.png' />
                        </div>
                        <div className='manage-video-dropdown'>

                        </div>
                        <div className='watch-home-dropdown'>

                        </div>
                    </div>
                    <div className="navbar-container-right">
                        <div className="search-bar">
                            <SearchBarContainer />
                        </div>
                        <div>
                            <button className='home-navbar-logout' onClick={this.handleProcess}> Logout </button>
                        </div>
                        <div className="user-dropdown">
                            <UserDropdown processForm={this.props.processForm}/>
                        </div>
                        <div className="upload-video-dropdown">
                            <Dropdown />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default HomeNavbar

