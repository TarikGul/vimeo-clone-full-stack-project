import React from 'react';

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
            <button className='home-navbar-logout' onClick={this.handleProcess}> nav form</button>
        </div>
        )
    }
}

export default HomeNavbar

