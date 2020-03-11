import React from 'react'

class SearchBar extends React.Component {
    constructor(props) {
        super(props)

        this.state = { clicked: false }

        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        this.setState({clicked: false})
    }

    handleChange(e) {
        e.preventDefault(e)
        
        this.setState({ clicked: true })
    }

    //The error that it is giving me is that cannot read setState of undefined
    //Component did mount is useless here. 
    //Need to probable refactor
    render() {
        // debugger
        return (
            <div>
                {  
                (this.props.location !== undefined  || this.props.location !== '/')
                ?(
                <div className="search-bar-container-not-home">
                    <input className="search-bar" type="text" placeHolder="Search videos, people, and more"/>
                </div>
                ):(
                <div className='search-bar-container'>
                    {
                        this.state.clicked
                        ?(
                            <div className='search-bar-input'>
                                <input type="text" placeholder='Search'/>
                            </div>
                        ) : (
                            <button
                            onClick={this.handleChange}
                            className='search-button'>
                                Search
                            </button>
                        )
                    }
                </div>
                )
                }
            </div>
        )
    }
}

export default SearchBar;