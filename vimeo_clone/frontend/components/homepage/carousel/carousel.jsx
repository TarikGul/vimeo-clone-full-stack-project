import React from 'react'
import PostIndexContainer from '../../posts/post_index_container'

// Pass props down from homepage to carousel then to PostIndex!!!!

class Carousel extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {

        return (
            <div className='carousel'>
                <PostIndexContainer ownProps={this.props.ownProps}/>
            </div>
        )
    }
}

export default Carousel;