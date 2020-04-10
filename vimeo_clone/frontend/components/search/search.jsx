import React from 'react'

class SearchBar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            search: ''
        }

        this.update = this.update.bind(this)
    }

    componentDidMount() {
        const { entities, location } = this.props
        if (location.pathname === '/home') {
            return;
        } else if (Object.values(entities.posts).length <= 1) {
            this.props.fetchPosts();
        }
    }

    update() {
        return (e) => this.setState({ search: e.currentTarget.value })
    }

    sort(str) {
        const { entities } = this.props
        const foundPosts = [];

    }

    render() {
        return (
            <div className="search-bar-container-not-home">
                <input 
                    className="search-bar" 
                    type="text" 
                    placeholder="Search videos, people, and more"
                    onChange={this.update()}/>
            </div>
        )
    }
}

export default SearchBar;