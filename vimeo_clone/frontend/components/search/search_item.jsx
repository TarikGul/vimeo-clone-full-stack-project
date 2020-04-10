import React from 'react';
import { Link } from 'react-router-dom';

const SearchItem = props => {
    const { post } = props
    
    return (
        <Link to={`/posts/${post.id}`} className="search-item">
            <div className="search-item-inner">
                <div className={props.classColor}>
                    {post.title}
                </div>
            </div>
        </Link>
    )
}

export default SearchItem;