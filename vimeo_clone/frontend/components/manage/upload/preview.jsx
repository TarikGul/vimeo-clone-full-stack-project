import React from 'react';
import ReactPlayer from 'react-player'

const PreviewPost = props => {
    const { update, videoUrl } = props
    debugger
    return (
        <div className="preview-container">
            <div className="video-preview-container">
                <ReactPlayer url={videoUrl} 
                             width="100%" 
                             height="100%" 
                             controls/>
            </div>
            <div className="title-description-container">
                <label>Title</label>
                <input type="text"
                    onChange={update('title')}/>
                <label>Description</label>
                <input type="textarea"
                    onChange={update('description')}/>
            </div>
        </div>
    )
}

export default PreviewPost;