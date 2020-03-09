import React from 'react';
import UserDropdown from './user_dropdown'
import Search from '../search/search'
import Dropdown from './home_dropwdown'
import { Link } from 'react-router-dom'

class HomeNavbar extends React.Component {
    constructor(props) {
        super(props)
        // this.state = this.props.ownProps
        this.handleProcess = this.handleProcess.bind(this)
    }

    handleProcess(e) {
        e.preventDefault()
        // debugger
        console.log('this.props.location', this.props.location)
        if (this.props.location.pathname === '/home') {
            this.props.processForm()
            .then(()=> (
                this.props.history.push('/')
                ))
        } else {
            // debugger
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
                                <Link to='/home'><img className="logo-img" src="assets/input-onlinepngtools.png" /></Link>
                        </div>
                        <div className='manage-video-dropdown'>

                        </div>
                        <div className='watch-home-dropdown'>

                        </div>
                    </div>
                    <div className="navbar-container-right">
                        <div className="search-bar">
                            <Search />
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

