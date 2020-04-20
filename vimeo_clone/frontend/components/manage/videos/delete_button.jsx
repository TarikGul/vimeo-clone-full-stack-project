import React from 'react';

const DeleteButton = props => {
    return (
        <div className="delete-button-manage-videos-container">
            <div className="delete-button-inner-container">
                <button className="delete-button-manage-videos" onClick={props.deleteClick}>Delete</button>
            </div>
        </div>
    )
}

export default DeleteButton