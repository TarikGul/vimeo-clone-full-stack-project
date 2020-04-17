import React from 'react'

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.onDemoClick = this.onDemoClick.bind(this)
    }

    handleInput(type) {
        return (e) => {
            this.setState({
                [type]: e.target.value
            })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state)
        this.props.processForm(user)
            .then(() => (
                this.props.history.push('/home')
            ))
            .then(() => (
                this.props.closeModal()
            ))
        // on a successful Submit you can actually push the information from a 
        // link to your history in order to grab remaining information
        // .then(() => this.props.history.push('/chirps'));
    }

    onDemoClick(e) {
        e.preventDefault();
        const demoUser = {
            username: 'guest',
            password: 'password'
        }
        this.props.processForm(demoUser)
            .then(() => (
                this.props.history.push('/home')
            ))
            .then(() => (
                this.props.closeModal()
            ))
    }

    renderErrors() {
    
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        )
    }

    // Need to add the X button and more styling to this section.
    render() {
        return (
            <div>
                <div className='modal-ti'>
                    <div className='modal-title'> Log in to Vimeo </div>
                    
                    {/* <button> X </button> */}
                </div>
                <form onSubmit={this.handleSubmit} className='modal-form' >
                    {this.renderErrors()}
                    <div className='input-wrapper'>
                        <input 
                            placeholder='Username'
                            className="login-input"
                            type="text"
                            value={this.state.username}
                            onChange={this.handleInput('username')}
                        />
                    </div>
                    <div className='input-wrapper'>
                        <input
                            placeholder='Password'
                            className="login-input" 
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                        />
                    </div>
                    <input className="modal-button" type="submit" value='Log in with username' />
                    <div className="space-between-demo-login"> or </div>
                    <button className="demo-user-login-modal" onClick={this.onDemoClick}> 
                        Demo User 
                    </button>
                    <div className="navigate-to-other-method">
                        <div className="dont-have-an-account">
                            Don't have an account?
                        </div>
                        <div className="signup-link-bottom">
                            {this.props.otherForm}
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default LoginForm;