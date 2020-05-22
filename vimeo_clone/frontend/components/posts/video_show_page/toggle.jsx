import React from 'react'

class ToggleButton extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            clicked: false
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        const { dispatchToggle } = this.props;
        dispatchToggle();
    }

    render() {
        const { ui } = this.props;
        return (
            <div className="toggle-autplay-container" >
                <label className="switch">
                    <input type="checkbox" checked={ui.autoplay} onChange={this.handleChange}/>
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