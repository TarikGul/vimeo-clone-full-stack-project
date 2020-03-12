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
            .then(() => (
                this.props.history.push('/home')
            ))
            .then(() => (
                this.props.closeModal()
            ))
        // on a successful Submit you can actually push the information from a 
        // link to your history in order to grab remaining information
        //.then(() => this.props.history.push('/chirps'));
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
                <div className="signup-container">
                    <div className='modal-title'> Join Vimeo </div>
                    <form onSubmit={this.handleSubmit} className='modal-form' >
                        {this.renderErrors()}
                        <div className='input-wrapper'>
                            <input
                                required
                                placeholder='Username' 
                                className="join-input"
                                type="text"
                                value={this.state.username}
                                onChange={this.handleInput('username')}
                                />
                        </div>
                        <div className='input-wrapper'>
                            <input
                                placeholder='Email'
                                className="join-input" 
                                type="text"
                                value={this.state.email}
                                onChange={this.handleInput('email')}
                                />
                        </div>
                        <div className='input-wrapper'>
                            <input 
                                placeholder='Password'
                                className="join-input" 
                                type="password"
                                value={this.state.password}
                                onChange={this.handleInput('password')}
                                />
                        </div>
                        <input className="modal-button" type="text" type="submit" value={this.props.formType} />
                        <div className="have-an-account">
                            <div className="have-an-account-tex">
                                Have an account?
                            </div>
                            <div className="login-bottom-modal">
                                {this.props.otherForm}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default SignupForm;