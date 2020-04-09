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
        this.props.fetchPosts().then(() => {
            $('.video-feed-posts').flickity({
                cellAlign: 'left',
                groupCells: true,
                draggable: false
            });
        })
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