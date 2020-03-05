import React from 'react';
import { Link, Redirect } from 'react-router-dom';


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
            <Link to='/'><button className='home-navbar-logout' onClick={this.handleProcess}> nav form</button></Link>
        </div>
        )
    }
}

export default HomeNavbar

