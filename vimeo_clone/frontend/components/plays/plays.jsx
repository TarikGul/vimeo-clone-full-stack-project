import React from 'react';

const Plays = props => {
    const { match, location } = props
    let postId;
    let plays;
    if (props.entities.posts[parseInt(match.params.postId)].plays === undefined) {
        plays = 0;
    } else if (match.params.postId && location.pathname === `/posts/${match.params.postId}`) {
        postId = parseInt(match.params.postId)
        if (props.entities.posts[postId].plays.length !== 0) {
            plays = Object.keys(props.entities.posts[postId].plays).length
        } else {
            plays = 0
        }
    }

    return (
        <div className="plays-info">
            <img className="plays-i" src="/play-button.svg" width="18" height="18" />
            <div className="plays-text">
                {plays}
            </div>
        </div>
    );
};

export default Plays;