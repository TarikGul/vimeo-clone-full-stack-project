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
                        <label>Title (required)</label>
                        <input 
                            type="text"
                            className="title-preview"
                            onChange={update('title')}
                            required/>
                        <label>Description</label>
                        <input 
                            type="textarea"
                            className="description-preview"
                            onChange={update('description')}
                            required/>
                    </div>
                    <div className="thumbnail-preview-container">
                        <img
                            src={thumbnailUrl}
                            width="260"
                            height="230" />
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