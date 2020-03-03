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
        debugger
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
                <form onSubmit={this.handleSubmit}>
                    <h3 id='navbar-name'>Bimeo</h3>
                    <br/>
                    {this.props.formType}
                    {/* Please {this.props.formType} or {this.props.navLink} */}
                    {this.renderErrors()}
                    <label>Username:
                        <input type="text"
                            value={this.state.username}
                            onChange={this.handleInput('username')}
                        />
                    </label>
                    <label>Password:
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