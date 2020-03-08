import React from 'react'

const SidebarButton = props => {
    return (
        <div className={`sidebar-button-inner-container ${props.buttonName}-sidebar-button`}>
            <button className="home-page-sidebar-button">
                <div className="homepage-inner-container-substance">
                    <img className="home-page-sidebar-button-img" src= {props.imgUrl} />
                    <div className="home-page-sidebar-text-container">
                        {props.buttonName}
                    </div>
                </div>
            </button>
        </div>
    )
}

export default SidebarButton;