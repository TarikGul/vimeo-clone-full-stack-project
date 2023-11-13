import React from 'react';

class DropdownNav extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            showDropdown: false
        }

        this.showDropdown = this.showDropdown.bind(this)
        this.closeDropdown = this.closeDropdown.bind(this)
    }

    showDropdown(e) {
        e.preventDefault();

        this.setState({ showDropdown: true })
    }

    closeDropdown() {
        this.setState({ showDropdown: false })
    }


    // NOTE! you need to fix the logic for these buttons. 
    // Unless you want a user not to be able to access the splash page once they are logged
    // in then that is cool otherwise you need to refactor that logic.
    render() {
        const { openModal } = this.props
        return (
            <div className='nav-dropdown' onMouseLeave={this.closeDropdown}>
                <button
                    onClick={() => openModal('login')} 
                    className='new-video-dropdown' 
                    onMouseEnter={this.showDropdown}
                    >
                    <div className='button-container'>
                        <div className='unicode-dropdown'>
                            {'\u002B'}
                        </div>
                        <div className='nav-btn-name'>   
                            New Video
                        </div>
                    </div>
                </button>
                {
                    this.state.showDropdown
                    ? (
                            <div className='drop-down-container' onMouseLeave={this.closeDropdown} >
                            <button onClick={ () => openModal('login')} className='nav-dropdown-btn'>Upload</button>
                            <button onClick={ () => openModal('login')} className='nav-dropdown-btn'>Create New Video</button>
                        </div>
                    ) : (
                        null
                    )
                }
            </div>
        )
    }
}
//&#65291
export default DropdownNav
