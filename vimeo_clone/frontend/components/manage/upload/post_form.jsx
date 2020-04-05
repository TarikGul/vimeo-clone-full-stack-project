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
        this.handleFile = this.handleFile.bind(this)
    }

    update(field) {
        return (e) => this.setState({ [field]: e.currentTarget.value })
    }

    handleFile(field) {
        return (e) => {
            const file = e.currentTarget.files[0];
            const fileReader = new FileReader();
            fileReader.onloadend = () => {
                if (field === 'thumbnail') {
                    this.setState({ thumbnailFile: file});
                } else {
                    this.setState({ videoFile: file});
                }
            };
            if (file) {
                fileReader.readAsDataURL(file);
            }
        }
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
                                <input type="file"
                                       onChange={this.handleFile('video')}
                                       className="upload-file-input"/>
                            </button>
                            <button className="upload-button">
                                <img className="cloud-i" src="/cloud-upload.svg" width="18" height="18" />
                                {/* Change this to a loading bar */}
                                <div className="upload-button-text">
                                    {!this.state.thumbnailFile ?
                                        `Choose thumbnail files` : ` Upload Successful`
                                    }
                                </div>
                                <input type="file"
                                    onChange={this.handleFile('video')}
                                    className="upload-file-input" />
                            </button>
                        </div>
                        <div className="title-description-container">
                            <label> Title:
                                <input type="text"/>
                            </label>
                            <label>Description</label>
                            <input type="textArea"/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default PostForm;