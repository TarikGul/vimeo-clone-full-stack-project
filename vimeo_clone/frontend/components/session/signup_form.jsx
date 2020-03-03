import React from 'react';

class SignupForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            email: "",
            password: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);

        //In the solution they have this not here!
        // this.handleInput = this.handleInput.bind(this)
    }

    //Here we are check the type of input we are going to submit 
    //When we return a value it can be the value of the event.target
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
        //.then(() => this.props.history.push('/chirps'));
    }

    renderErrors() {
        // debugger
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
            <div className="login-container">
                <h2>Sign Up</h2>
                <form onSubmit={this.handleSubmit}>
                    Welcome to The Bench
                    Please {this.props.formType} or {this.props.navLink}
                    {this.renderErrors()}
                    <label>Username:
                        <input type="text"
                            value={this.state.username}
                            onChange={this.handleInput('username')}
                        />
                    </label>Email:
                        <input type="text"
                        value={this.state.email}
                        onChange={this.handleInput('email')}
                    />
                    <label>Password:
                        <input type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                        />
                    </label>
                    <input type="text" type="submit" value={this.props.formType} />
                </form>
            </div>
        )
    }
}

export default SignupForm;