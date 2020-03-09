import React from 'react'

class CommentForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            currentComment: ''
        }
    }

    update() {
        return e => this.setState({ currentComment: e.target.value })
    }

    submitEvent(e) {
        e.preventDefault()
        this.props.submitEvent(this.state)
    }

    render() {
        return (
            <div className="">
                <div>Comment Here</div>
                <form onSubmit={this.submitEvent} >
                    <label>
                        <input 
                            value={this.state.currentComment}
                            onChange={this.update()}
                            type="body"/>
                    </label>
                    <button type='submit' ></button>
                </form>
            </div>
        )
    }
}

export default CommentForm