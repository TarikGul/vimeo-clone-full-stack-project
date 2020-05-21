import React from 'react'

class ToggleButton extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            clicked: false
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        e.preventDefault();

        console.log('the autoplay was clicked');
    }

    render() {
        return (
            <div className="toggle-autplay-container" >
                <label className="switch">
                    <input type="checkbox" checked={} onChange={this.handleChange}/>
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