import React from 'react'
import PostIndex from '../../posts/post_index'
import Arrow from './arrow'

//pass props down from homepage to carousel then to PostIndex!!!!

class Carousel extends React.Component {
    constructor(props) {
        super(props)

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