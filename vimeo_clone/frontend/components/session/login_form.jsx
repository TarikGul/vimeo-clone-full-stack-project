import React from 'react'

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this)
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
        // on a successful Submit you can actually push the information from a 
        // link to your history in order to grab remaining information
        // .then(() => this.props.history.push('/chirps'));
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
                    <input className="modal-button" type="submit" value='Login' />
                </form>
            </div>
        )
    }
}

export default LoginForm;