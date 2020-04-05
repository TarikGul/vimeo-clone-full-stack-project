import React from 'react';
import PreviewPost from './preview'

class PostForm extends React.Component {
    constructor(props) {
        super(props)

        this.state =  {
            title: '',
            videoFile: null,
            thumbnailFile: null,
            description: '',
            userId: this.props.sessionId,
            thumbnailUrl: null,
            videoUrl: null,
            passwordProtected: false
        }

        this.update = this.update.bind(this)
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
                    this.setState({ thumbnailFile: file, thumbnailUrl: fileReader.result});
                } else {
                    this.setState({ videoFile: file, videoUrl: fileReader.result});
                }
            };
            if (file) {
                fileReader.readAsDataURL(file);
            }
        }
    }
    

    handleSubmit() {
        const formData = new FormData();
        formData.append('post[title]', this.state.title)
        formData.append('post[description]', this.state.description)
        formData.append('post[user_id]', this.state.userId)
        formData.append('post[password_protected]', this.state.passwordProtected)
        if (this.state.videoFile) {
            formData.append('post[video]', this.state.videoFile)
        }
        if (this.state.thumbFile) {
            formData.append('post[thumbnail]', this.state.thumbnailFile)
        }
        this.props.createPost(formData)
            .then((res) => {
            this.props.history.push(`/posts/${res.post.id}`)
        });
    }

    
    render() {
        const { thumbnailUrl, videoUrl } = this.state
        return (
            <div className="upload-form-container">
                <div className="upload-form-inner-container">
                    <form className="upload-form" onSubmit={this.handleSubmit}>
                        {
                            (thumbnailUrl && videoUrl) 
                            ?
                            (
                            <PreviewPost
                                thumbnailUrl={thumbnailUrl}
                                videoUrl={videoUrl}
                                update={this.update} />
                            ) : (
                            <div className="upload-video-thumbnail-container">
                                <img src="/upload-video.svg" alt="" width="85" height="56" />
                                <div className="upload-box-text">
                                    Upload any video that is an <br />
                                    .mp4
                                </div>
                                <button className="upload-button">
                                    <img className="cloud-i" src="/cloud-upload.svg" width="18" height="18" />
                                    {/* Change this to a loading bar */}
                                    <div className="upload-button-text">
                                        {!this.state.videoFile ?
                                            `Choose video files` : ` Upload Successful`
                                        }
                                    </div>
                                    <input type="file"
                                        accept="video/mp4"
                                        onChange={this.handleFile('video')}
                                        className="upload-file-input" />
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
                                        accept="image/png,image/jpeg"
                                        onChange={this.handleFile('thumbnail')}
                                        className="upload-file-input" />
                                </button>
                                <div className="preview-message">
                                    Once files are uploaded, fill out the preview page before submitting
                                </div>
                            </div>
                            )
                        }
                        
                    </form>
                </div>
            </div>
        )
    }
}

export default PostForm;