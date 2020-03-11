import React from 'react'
import PostInfoRow from './post_info_row'
import { timeSince } from '../../../util/date_api_util'

class BottomContainer extends React.Component {
    constructor(props) {
        super(props)

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
                            <div className="manage-videos-checkbox">
                                {' '}
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