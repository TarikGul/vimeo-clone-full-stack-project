import React from 'react'

class ToggleButton extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            clicked: false
        }

        this.consoleResult = this.consoleResult.bind(this)
    }

    consoleResult(e) {
        e.preventDefault();
        this.setState(prevState => { clicked: !prevState })
    }

    render() {
        return (
            <div className="toggle-autplay-container" onClick={this.consoleResult}>
                <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                </label>
                <div className="autoplay-toggle">
                    Autoplay next video
                </div>
            </div>

        )
            
    }
}

export default ToggleButton;