import React from 'react'
import { Link } from 'react-router-dom'

class SidebarButton extends React.Component {
    constructor(props) {
        super(props)

    } 

    render() {
        return (
            <div className={`sidebar-button-inner-container ${this.props.buttonName}-sidebar-button`}>
                <Link to={this.props.route}>
                    <button className="home-page-sidebar-button">
                        <div className="homepage-inner-container-substance">
                            <img className="home-page-sidebar-button-img" src= {this.props.imgUrl} />
                            <div className="home-page-sidebar-text-container">
                                {this.props.buttonName}
                            </div>
                        </div>
                    </button>
                </Link>
            </div>
        )
    }
}

export default SidebarButton;