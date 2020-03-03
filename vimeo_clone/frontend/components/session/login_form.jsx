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
                <div className='modal-title'> Log in to Vimeo </div>
                <form onSubmit={this.handleSubmit} className='modal-form'>
                    {this.props.formType}
                    {this.renderErrors()}
                    <label className='modal-username'>Username:
                        <input type="text"
                            value={this.state.username}
                            onChange={this.handleInput('username')}
                        />
                    </label>
                    <label className="modal-password">Password:
                        <input type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                        />
                    </label>
                    <input className="session-submit" type="submit" value={this.props.formType} />
                </form>
            </div>
        )
    }
}

export default LoginForm;