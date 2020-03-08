import React from 'react'
import SidebarButton from './sidebar_button'

class SidebarButtonBox extends React.Component {
    constructor(props) {
        super(props)

    }
    render() {
        const images = [
            "assets/home-button.png", 
            "assets/video-button.png",
            "assets/create-video-button.png",
            "assets/camera-button.png",
            "assets/showcase-button.png" 
        ];
        const name = [
            "Home",
            "Videos",
            "Create",
            "Life events",
            "Showcases"
        ]; 
        const counter = [0, 1, 2, 3, 4];
        return (
            <div className="homepage-sidebar-container">
                {
                   counter.map(i => {
                       return <SidebarButton 
                            imgUrl={images[i]} 
                            buttonName={name[i]}
                            />
                   }) 
                }
            </div>
        )
    }
}

export default SidebarButtonBox;