import React from 'react'

class ToggleButton extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            clicked: false
        }
    }

    render() {
        return (
            <div className="toggle-autplay-container" >
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