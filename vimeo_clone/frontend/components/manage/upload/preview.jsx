import React from 'react';
import ReactPlayer from 'react-player'

const PreviewPost = props => {
    const { update, videoUrl, thumbnailUrl } = props
    return (
        <div className="preview-container">
            <div className="video-preview-container">
                <ReactPlayer url={videoUrl} 
                             width="150%" 
                             height="120%"
                             className="preview-player" 
                             controls/>
            </div>
            <div className="thumbnail-preview-container">
                <img src={thumbnailUrl}
                     width="260"
                     height="230"/>
            </div>
            <div className="title-description-container">
                <label>Title</label>
                <input type="text"
                       className="title-preview"
                       onChange={update('title')}
                       required/>
                <label>Description</label>
                <input type="textarea"
                       className="description-preview"
                       onChange={update('description')}
                       required/>
            </div>
        </div>
    )
}

export default PreviewPost;