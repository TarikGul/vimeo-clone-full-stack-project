import React from 'react';
import { Link } from 'react-router-dom'

const ResultItem = props => {
    const { post } = props;
    return (
        <div className="result-box-container">
            <Link to={`/posts/${post.id}`} className="result-box-top">
                <img 
                    className="search-thumbnail"
                    src={props.post.thumbnailUrl} /> 
            </Link>
            <div className="result-box-bottom">
                <Link to={`/posts/${post.id}`} className="result-bottom-title">
                    {props.post.title}  
                </Link>
                <div className="plays-user-result-box">
                    <div className="result-bottom-user">
                        {props.post.uploader.username}
                    </div>
                    <div className="result-bottom-plays">
                        {`${props.post.plays} views`}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResultItem;