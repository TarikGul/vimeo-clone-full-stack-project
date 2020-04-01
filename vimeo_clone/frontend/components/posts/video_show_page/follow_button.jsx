import React from 'react'

const FollowButton = props => {
    return (
        <div className="Follow-button-container">
            <button className="follow-button">
                <img class="follow-i" src="/follow-plus.svg" width="14" height="14"/>
                    <div className="follow-button-text">
                        Follow
                    </div>
            </button> 
        </div>
    )
}

export default FollowButton;