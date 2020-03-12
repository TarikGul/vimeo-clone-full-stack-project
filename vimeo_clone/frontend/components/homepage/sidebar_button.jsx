import React from 'react'
import { Link } from 'react-router-dom'

class SidebarButton extends React.Component {
    constructor(props) {
        super(props)

        this.state = this.props

    } 

    render() {
        if (this.props.ownProps === undefined) {
            return null
        }
        console.log('button props', this.props)
        return (
            <div className={`sidebar-button-inner-container ${this.props.buttonName}-sidebar-button`}>
                <Link to={this.props.route}>
                    {
                        this.props.ownProps.match.path === this.props.route
                        ?
                        (
                            <button className="home-page-sidebar-button clicked-sidebar">
                                <div className="homepage-inner-container-substance">
                                    <img className="home-page-sidebar-button-img" src={this.props.imgUrl} />
                                    <div className="home-page-sidebar-text-container">
                                        {this.props.buttonName}
                                    </div>
                                </div>
                            </button>
                        ) : (
                            <button className="home-page-sidebar-button">
                                <div className="homepage-inner-container-substance">
                                    <img className="home-page-sidebar-button-img" src={this.props.imgUrl} />
                                    <div className="home-page-sidebar-text-container">
                                        {this.props.buttonName}
                                    </div>
                                </div>
                            </button>
                        )
                    }
                    {/* <button className="home-page-sidebar-button">
                        <div className="homepage-inner-container-substance">
                            <img className="home-page-sidebar-button-img" src= {this.props.imgUrl} />
                            <div className="home-page-sidebar-text-container">
                                {this.props.buttonName}
                            </div>
                        </div>
                    </button> */}
                </Link>
            </div>
        )
    }
}

export default SidebarButton;