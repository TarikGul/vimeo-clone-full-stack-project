import React from 'react';
import ReactPlayer from 'react-player'

const PreviewPost = props => {
    const { update, videoUrl, thumbnailUrl } = props
    return (
        <div className="preview-container">
            <div className="inner-sidebar-preview">
                <div className="sidebar-preview-padding">
                    <div className="general-preview-sidebar">
                        <div className="general-text-preview">
                            General
                        </div>
                        <div className="general-description-preview">
                            Add a title and description, and confirm your thumbnail. <br/>
                            Click Upload when done.
                        </div>
                    </div> 
                    <div className="title-description-container">
                        <div className="preview-info-text">
                            Info
                        </div>
                        <div className="title-container-preview">
                            <label>Title (required)</label>
                            <input 
                                type="text"
                                className="title-preview"
                                onChange={update('title')}
                                required/>
                        </div>
                        <div className="description-container-preview">
                            <label>Description</label>
                            <textarea 
                                type="body"
                                className="description-preview"
                                onChange={update('description')}
                                required/>
                        </div>
                    </div>
                    <div className="thumbnail-preview-container">
                        <div className="thumbnail-preview-title">
                            Thumbnail
                        </div>
                        <img
                            className="thumbnail-preview"
                            src={thumbnailUrl}
                            width="116"
                            height="65" />
                    </div>
                </div>
            </div>
            <div className="video-preview-container">
                <ReactPlayer
                    url={videoUrl}
                    width="150%"
                    height="120%"
                    className="preview-player"
                    controls />
            </div>
        </div>
    )
}

export default PreviewPost;