import React from 'react';

const ResultItem = props => {

    return (
        <div className="result-box-container">
            <div className="result-box-top">
                <img 
                    className="search-thumbnail"
                    src={props.post.thumbnailUrl} /> 
            </div>
            <div className="result-box-bottom">
                <div className="result-bottom-title">
                    {props.post.title}  
                </div>
                <div className="plays-user-result-box">
                    <div className="result-bottom-user">
                        {props.post.uploader.username}
                    </div>
                    <div className="result-bottom-plays">
                        {props.post.plays}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResultItem;