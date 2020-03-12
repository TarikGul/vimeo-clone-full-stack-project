import React from 'react'
import PostInfoRow from './post_info_row'


class BottomContainer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            clicked: false
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        e.preventDefault();
        let clickedState;
        if(this.state.clicked === true) {
            clickedState = false
        } else {
            clickedState = true
        }
        this.setState({ clicked: clickedState })
    }

    render() {
        // debugger
        const { entities, userId, ownProps } = this.props
        if(entities.users[userId].user_posts === undefined) {
            return null
        }
        const postKeys = Object.values(entities.users[userId].user_posts)
        return (
            <div className="bottom-container-manage-videos">
                <div className="bottom-container-manage-videos-block">
                    <div className="bottom-container-manage-videos-top-manager">
                        <div className="manage-videos-top-row-left">
                            <div className="checkbox-manage-videos">
                                {   
                                    this.state.clicked
                                    ?
                                    (
                                        <input className="manage-videos-checkbox checked" type="checkbox" onClick={this.handleClick} />
                                    ): (
                                        <input className="manage-videos-checkbox" type="checkbox" onClick={this.handleClick} checked/>
                                    )

                                }
                                
                            </div>
                            <div className="manage-videos-title-sorter">
                                Title
                            </div>
                        </div>
                        <div className="manage-videos-top-row-right">
                            <div className="manage-videos-privacy">
                                Privacy
                            </div>
                            <div className="manage-videos-modified-date">
                                Modified
                            </div>
                        </div>
                    </div>
                    {
                        postKeys.map((post, i) => {
                            return <PostInfoRow
                                        clicked={this.state.clicked}
                                        key={`post-info-${i}`}
                                        ownProps={ownProps} 
                                        post={post}/>
                        })
                    }
                </div>
            </div>
        )
    }
}

export default BottomContainer;