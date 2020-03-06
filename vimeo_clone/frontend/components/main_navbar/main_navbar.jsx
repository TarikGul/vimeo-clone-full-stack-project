import React from 'react';
import UserDropdown from './user_dropdown'

class HomeNavbar extends React.Component {
    constructor(props) {
        super(props)

        this.handleProcess = this.handleProcess.bind(this)
    }

    handleProcess(e) {
        e.preventDefault()

        this.props.processForm()
            .then(()=> (
                this.props.history.push('/')
            ))
    }
    render() {
        return (
        <div className='navbar-container'>
                
            Your navbar is working <br/>
            <button className='home-navbar-logout' onClick={this.handleProcess}> Logout </button>
            <UserDropdown processForm={this.props.processForm}/>
        </div>
        )
    }
}

export default HomeNavbar

