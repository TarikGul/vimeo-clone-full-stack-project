import React from 'react';
import ReactPlayer from 'react-player'

const PreviewPost = props => {
    const { update, videoUrl, thumbnailUrl } = props
    return (
        <div className="preview-container">
            <div className="video-preview-container">
                <ReactPlayer url={videoUrl} 
                             width="100%" 
                             height="100%" 
                             controls/>
            </div>
            <div className="thumbnail-preview-container">
                <img src={thumbnailUrl}
                     width="260"
                     height="auto"/>
            </div>
            <div className="title-description-container">
                <label>Title</label>
                <input type="text"
                       className="title-preview"
                       onChange={update('title')}/>
                <label>Description</label>
                <input type="textarea"
                       className="description-preview"
                       onChange={update('description')}/>
            </div>
        </div>
    )
}

export default PreviewPost;