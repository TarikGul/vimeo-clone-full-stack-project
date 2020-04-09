import React from 'react'

class SearchBar extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        this.setState({clicked: false})
    }

    //The error that it is giving me is that cannot read setState of undefined
    //Component did mount is useless here. 
    //Need to probable refactor
    render() {
        return (
            <div className="search-bar-container-not-home">
                <input className="search-bar" type="text" placeholder="Search videos, people, and more"/>
            </div>
        )
    }
}

export default SearchBar;