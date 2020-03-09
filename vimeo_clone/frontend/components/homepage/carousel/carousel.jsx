import React from 'react'
import PostIndex from '../../posts/post_index'
import Arrow from './arrow'

//pass props down from homepage to carousel then to PostIndex!!!!

class Carousel extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            currentImageIndex: 0,
            direction: ''
        }
        this.divPositions = Object.keys(this.props.posts)
        this.clickLeft = this.clickLeft.bind(this)
        this.clickRight = this.clickRight.bind(this)
    }

    clickRight() {
        this.setState(prevState => ({
            currentImageIndex: prevState.currentImageIndex + 5
        }))
        console.log("it got click", this.state.currentImageIndex)
    }

    clickLeft() {
        this.setState(prevState => ({
            currentImageIndex: prevState.currentImageIndex - 5
        }))
    }

    render() {
        return (
            <div className="carousel">
                <PostIndex posts={this.props.posts} divIndex={this.state.currentImageIndex} ownProps={this.props.ownProps}/>
            </div>
        )
    }
}

export default Carousel;