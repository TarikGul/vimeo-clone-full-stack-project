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
        
        console.log(this.state.clicked)
        this.setState({ clicked: true })
    }

    //The error that it is giving me is that cannot read setState of undefined
    //Component did mount is useless here. 
    //Need to probable refactor
    render() {
        return (
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
}

export default SearchBar;