import React from 'react';
import PreviewPost from './preview';
import ReactGA from 'react-ga';
import { fileSize } from '../../../util/duration_util';


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
            passwordProtected: false,
            loading: false,
            duration: null,
            fileSize: null,
            alertFileSize: false,
        }

        this.update = this.update.bind(this);
        this.handleDuration = this.handleDuration.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    componentDidMount() {
        if (window.location.hostname !== 'localhost') {
            ReactGA.initialize('UA-162754702-1');
            ReactGA.pageview('/manage/upload');
        }
        const { sessionId, users } = this.props
        if (users[sessionId].user_posts === undefined) {
            this.props.fetchUser(sessionId);
        };
    };

    update(field) {
        return (e) => this.setState({ [field]: e.currentTarget.value })
    }

    handleFile(field) {
        return (e) => {
            const file = e.currentTarget.files[0];
            const fileReader = new FileReader();
            const size = fileSize(file.size)
            // Make sure file size being uploaded is less than 50MB
            if (size > 50) {
                this.setState({ alertFileSize: true });
            } else {
                fileReader.onloadend = () => {
                    if (field === 'thumbnail') {
                        this.setState({ 
                            thumbnailFile: file, 
                            thumbnailUrl: fileReader.result,
                            alertFileSize: false
                        });
                    } else {
                        let data = this.handleDuration(file)

                        // Wait for handleDuration to have the duration set into data
                        // without the set timeout youll get undefined for duration
                        setTimeout(() => {
                            this.setState({ 
                                videoFile: file, 
                                videoUrl: fileReader.result, 
                                duration: data.duration,
                                fileSize: size,
                                alertFileSize: false 
                            });
                        }, 500)
                    }
                };
                if (file) {
                    fileReader.readAsDataURL(file);
                };
            };
        };
    };

    handleDuration(file) {
        window.URL = window.URL || window.webkitURL;
        let data = {};
        let video = document.createElement('video');
        video.preload = 'metadata';

        video.onloadedmetadata = function () {
            window.URL.revokeObjectURL(video.src);
            let duration = video.duration;
            data['duration'] = duration;
        }
        video.src = URL.createObjectURL(file);
        return data
    }
    

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('post[title]', this.state.title);
        formData.append('post[description]', this.state.description);
        formData.append('post[user_id]', this.state.userId);
        formData.append('post[password_protected]', this.state.passwordProtected);
        formData.append('post[duration]', this.state.duration);
        formData.append('post[bytes]', this.state.fileSize)
        if (this.state.videoFile) {
            formData.append('post[video]', this.state.videoFile)
        }
        if (this.state.thumbnailFile) {
            formData.append('post[thumbnail]', this.state.thumbnailFile)
        }
        this.setState({ loading: true })
        this.props.createPost(formData)
            .then((res) => {
            this.props.history.push(`/posts/${res.post.post.id}`)
        });
    }

    renderErrors(errors) {
        return (
            <div className="post-error-message">
                {`${errors.posts.statusText}`} <br/>
                {`Please try again later.`}
            </div>
        )
    }

    
    render() {
        const { errors } = this.props
        const { thumbnailUrl, videoUrl, loading, alertFileSize } = this.state
        return (
            <div className="upload-form-container">
                <div className="upload-form-inner-container">
                    <form className="upload-form" onSubmit={this.handleSubmit}>
                         {
                            (thumbnailUrl && videoUrl) 
                            ?
                            (
                            <div className="preview-post-form-container">
                                <PreviewPost
                                    loading={loading}
                                    thumbnailUrl={thumbnailUrl}
                                    videoUrl={videoUrl}
                                    update={this.update}
                                    errors={errors}
                                    renderErrors={this.renderErrors} />
                            </div>
                            ) : (
                            <div className="info-and-upload-container"> 
                                <div className="upload-video-thumbnail-container">
                                    <img src="/upload-video.svg" alt="" width="85" height="56" />
                                    <div className="upload-box-text">
                                        Upload any video that is an <br />
                                        .mp4
                                    </div>
                                    {
                                        alertFileSize ?
                                        (
                                            <div className="alert-filesize">
                                                Your file is above the 50MB upload limit, <br/> 
                                                please choose a smaller file.
                                            </div>
                                        ) : (
                                            null
                                        )
                                    }
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
                                <div className="upload-info-container">
                                    <div className="top-info-container">
                                        <img className="upload-info-i" src="/upload-check.svg" width="30" height="32"/>
                                        <div className="title-description-info">
                                            <div className="upload-info-title">
                                                Quality
                                            </div>
                                            <div className="upload-info-description">
                                                Your videos will look their <br/>
                                                best on every device, <br/>
                                                anywhere.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="middle-info-container">
                                        <img className="upload-info-i" src="/upload-lock.svg" width="30" height="32"/>
                                        <div className="title-description-info">
                                            <div className="upload-info-title">
                                                Storage and privacy
                                            </div>
                                            <div className="upload-info-description">
                                                Take control with private <br/>
                                                links, password protection, <br/>
                                                and flexible storage options.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bottom-info-container">
                                        <img className="upload-info-i" src="/upload-heart.svg" width="30" height="32"/>
                                        <div className="title-description-info">
                                            <div className="upload-info-title">
                                                Community
                                            </div>
                                            <div className="upload-info-description">
                                                Join the world’s best <br/>
                                                community of talented, <br/>
                                                supportive creators.
                                            </div>
                                        </div>
                                    </div>
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