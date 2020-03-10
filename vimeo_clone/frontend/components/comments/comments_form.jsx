import React from 'react'

class CommentForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            body: '',
            postId: this.props.postId,
            clicked: false

        }

        this.submitEvent = this.submitEvent.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    update() {
        return e => this.setState({ body: e.target.value })
    }

    submitEvent(e) {
        e.preventDefault()
        if (this.state.body.length < 3) {
            return 
        }
        this.props.createComment({
            body: this.state.body,
            postId: this.state.postId

        })
            .then(() => this.setState({ 
                body: '',
                postId: this.props.postId 
            }))
    }

    handleClick() {
        this.setState({ clicked: true })
    }

    render() {
        return (
            <div className="">
                <div className="add-a-new-comment">Add a new comment</div>
                <form onSubmit={this.submitEvent} >
                    <label>
                        <textarea
                            onClick={this.handleClick}
                            className="comment-textarea" 
                            placeholder='Add a comment'
                            value={this.state.body}
                            onChange={this.update()}
                            type="body"/>
                    </label>
                    {
                        this.state.clicked 
                        ?
                        (<div className="button-comment-container">
                            <button className="button-comment" type='submit'>Submit</button>
                            <div className="play-nice-comment">
                                Remember to be cool and play nice
                            </div>
                        </div>

                        ) : (
                            null
                        )
                    }
                    
                </form>
            </div>
        )
    }
}

export default CommentForm