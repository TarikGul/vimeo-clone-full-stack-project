import React from 'react'

class PostInfoRow extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div className="manage-video-row">
                {this.props.post.id}
            </div>
        )
    }
}

export default PostInfoRow