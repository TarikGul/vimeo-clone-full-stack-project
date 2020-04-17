import React from 'react';
import LikeButtonContainer from '../../likes/likes_container';
import PlaysContainer from '../../plays/plays_container';

class VideoLeftInfo extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            clicked: false,
            height: 0
        }

        this.expandDescription = this.expandDescription.bind(this);
    }

    componentDidMount() {
        const height = this.divElement.clientHeight;
        this.setState({ height });
    }

    expandDescription(e) {
        e.preventDefault();
        this.setState({ clicked: true });
    }



    render() {
        const { clicked, height } = this.state;
        const { entities, postId } = this.props;
        const retreiveComments = (arr, object) => {
            let comments = []
            for (let i = 0; i < arr.length; i++) {
                if (object[arr[i]].post_id.toString() === postId) {
                    comments.push(object[arr[i]])
                }
            }
            return comments
        }
        console.log(height)
        const commentKeys = Object.keys(this.props.entities.comments)
        const commentsLength = retreiveComments(commentKeys, this.props.entities.comments).length
        return (
            <div className="video-info-everything">
                {
                    clicked ? 
                    (
                        <div className="video-left-info-container-expanded">
                            <div className="inner-info-top-container">
                                <PlaysContainer />
                                <LikeButtonContainer />
                                <div className="comments-info">
                                    <img className="comments-i" src="/comment-button.svg" width="18" height="18" />
                                    <div className="comments-text">
                                        {commentsLength}
                                    </div>
                                </div>
                            </div>
                            <div className="description-info">
                                {entities.posts[postId].description}
                            </div>
                        </div>
                    ) : (
                        <div className="video-left-info-container"
                             ref={(divElement) => { this.divElement = divElement }}>
                            <div className="inner-info-top-container">
                                <PlaysContainer />
                                <LikeButtonContainer />
                                <div className="comments-info"> 
                                    <img className="comments-i" src="/comment-button.svg" width="18" height="18"/>
                                    <div className="comments-text">
                                        {commentsLength} 
                                    </div>
                                </div>
                            </div>
                            <div className="description-info">
                                {entities.posts[postId].description}
                            </div>
                            {

                                height > 255 ?
                                (
                                    <div className="expand-container">
                                        <div className="linear-gradient-comments">

                                        </div>
                                        <div className="read-more-absolute" onClick={this.expandDescription}>
                                            Read More...
                                        </div>
                                    </div>
                                ) : (
                                    null
                                )

                            }
                        </div>
                    )
                }
            </div>
        )
    }
}

export default VideoLeftInfo;