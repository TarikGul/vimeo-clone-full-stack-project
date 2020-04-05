import React from 'react';

class PostForm extends React.Component {
    constructor(props) {
        super(props)

        this.state =  {
            title: '',
            videoFile: null,
            thumbnailFile: null,
            description: '',
            userId: null,
            passwordProtected: false
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    update(field) {
        return (e) => this.setState({ [field]: e.currentTarget.value })
    }

    

    handleSubmit() {

    }

    

    render() {
        return (
            <div className="upload-form-container">
                <div className="upload-form-inner-container">
                    <form className="upload-form" onSubmit={this.handleSubmit}>
                        <div className="upload-video-thumbnail-container">
                            <img src="/upload-video.svg" alt="" width="85" height="56"/>
                            <div className="upload-box-text">
                                Upload any video that is an <br/>
                                .mp4
                            </div>
                            <button className="upload-button"> 
                                <img className="cloud-i" src="/cloud-upload.svg" width="18" height="18"/> 
                                {/* Change this to a loading bar */}
                                <div className="upload-button-text">
                                    {!this.state.videoFile ?
                                        `Choose video files` : ` Upload Successful`
                                    }
                                </div>
                            </button>
                            <button className="upload-button">
                                <img className="cloud-i" src="/cloud-upload.svg" width="18" height="18" />
                                {/* Change this to a loading bar */}
                                <div className="upload-button-text">
                                    {!this.state.thumbnailFile ?
                                        `Choose thumbnail files` : ` Upload Successful`
                                    }
                                </div>
                            </button>
                        </div>
                        <div className="title-description-container">

                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default PostForm;