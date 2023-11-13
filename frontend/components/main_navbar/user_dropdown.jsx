import React from 'react';
import _ from 'lodash';

class UserDropdown extends React.Component {
    constructor(props) {
        super(props)

        this.state= {
            showDropdown: false,
        }

        this.reRoute = this.reRoute.bind(this)
        this.showDropdown = this.showDropdown.bind(this);
        this.closeDropdown = this.closeDropdown.bind(this);

    }

    reRoute(field) {
        const { history } = this.props;

        if (field === 'manage') {
            history.push('/manage/videos')
        } else if (field === 'upload') {
            history.push('/manage/upload')
        }
    }

    showDropdown(e) {
        e.preventDefault();

        this.setState({ showDropdown: true })
    }

    closeDropdown() {
        this.setState({ showDropdown: false })
    }

    render() {
        const { showDropdown } = this.state;
        const { entities, sessionId, processForm } = this.props;
        const userFirstLetter = entities.users[sessionId].username[0];
        return (
            <div className="user-dropdown-container" onMouseLeave={this.closeDropdown}>
                <div className="user-dropdown" onMouseEnter={this.showDropdown}>
                    <div className="avatar-dropdown">
                        {_.capitalize(userFirstLetter)}
                    </div>
                </div>
                {
                    showDropdown ?
                    (
                        <div className="user-dropdown-menu">
                            <div className="user-dropdown-menu-container">
                                <div className="user-dropdown-username-container">
                                    <div className="user-dropdown-username">
                                        {_.capitalize(entities.users[sessionId].username)}
                                    </div>
                                </div>
                                <div className="user-dropdown-manage-videos">
                                    <div className="user-dropdown-manage-video" 
                                         onClick={() => this.reRoute('manage')}>
                                            <div className="user-dropdown-manage-video-text">
                                            Manage Videos
                                        </div>
                                    </div>
                                    <div className="user-dropdown-upload-videos" 
                                         onClick={() => this.reRoute('upload')}>
                                        <div className="user-dropdown-upload-video-text">
                                            Upload Videos
                                        </div>
                                    </div>
                                </div>
                                <div className="user-drop-down-logout" >
                                        <div className="user-drop-down-logout-container" 
                                             onClick={() => processForm()}>
                                        <div className="user-drop-down-logout-text">
                                            Log out
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        null
                    )
                }
            </div>
        )
    }
}

export default UserDropdown