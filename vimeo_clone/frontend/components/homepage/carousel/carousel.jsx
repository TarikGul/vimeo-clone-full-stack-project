import React from 'react'
import PostIndexContainer from '../../posts/post_index_container'
import Arrow from './arrow'

//pass props down from homepage to carousel then to PostIndex!!!!

class Carousel extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {

        return (
            <div className="carousel">
                <PostIndexContainer ownProps={this.props.ownProps}/>
            </div>
        )
    }
}

export default Carousel;