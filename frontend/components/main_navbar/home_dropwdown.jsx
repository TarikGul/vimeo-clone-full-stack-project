import React from 'react';

class DropdownNav extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            showDropdown: false
        }

        this.reRoute = this.reRoute.bind(this)
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

    reRoute() {
        const { ownProps }= this.props;

        ownProps.history.push('/manage/upload');
    }


    // NOTE! you need to fix the logic for these buttons. 
    // Unless you want a user not to be able to access the splash page once they are logged
    // in then that is cool otherwise you need to refactor that logic.
    render() {
        const { openModal } = this.props
        return (
            <div className='nav-dropdown-1' onMouseLeave={this.closeDropdown}>
                <button
                    className='new-video-dropdown-1'
                    onMouseEnter={this.showDropdown}
                >
                    <div className='button-container-1'>
                        <div className='unicode-dropdown-1'>
                            {'\u002B'}
                        </div>
                        <div className='nav-btn-name-1'>
                            New Video
                        </div>
                    </div>
                </button>
                {
                    this.state.showDropdown
                        ? (
                            <div className='drop-down-container-1' onMouseLeave={this.closeDropdown} >
                                <button
                                    onClick={this.reRoute}
                                    className='nav-dropdown-btn'>Upload</button>
                            </div>
                        ) : (
                            null
                        )
                }
            </div>
        )
    }
}

export default DropdownNav