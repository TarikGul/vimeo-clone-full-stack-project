import React from 'react'
import SearchItem from './search_item';

class SearchBar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            search: ''
        }

        this.handleKeyPress = this.handleKeyPress.bind(this)
        this.update = this.update.bind(this)
        this.sort = this.sort.bind(this)
    }

    componentDidMount() {
        const { entities, location } = this.props
        if (location.pathname === '/home') {
            return;
        } else if (Object.values(entities.posts).length <= 1) {
            this.props.fetchPosts();
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.location.pathname !== this.props.location.pathname) {
            this.setState({ search: '' })
        }
    }

    update() {
        if (Object.values(this.props.entities.posts).length === 0) {
            return null;
        }
        return (e) => this.setState({ search: e.currentTarget.value })
    }

    handleKeyPress(e) {
        if (e.charCode === 13) {
            // This is where you add the search results to the global state
            // Redirect to the search results page,
            // Allow the user to pick which video they want to go to.
            console.log('you pressed enter')
        }
    }

    sort(str) {
        const { entities } = this.props
        const posts = Object.values(entities.posts)
        const len = str.length
        
        if (posts.length === 0) return; 

        let foundPosts = posts.filter(post => {
            if(post.title.slice(0, len) ===  str) {
                return post
            };
        });

        return foundPosts
    }

    render() {
        const { search } = this.state;
        const { history } = this.props;
        const sorted = this.sort(search)

        return (
            <div>
                {
                    search.length === 0
                    ?
                    (
                        <div className="search-bar-container-not-home">
                            <input
                                className="search-bar"
                                type="text"
                                placeholder="Search videos, people, and more"
                                onChange={this.update()} />
                        </div>
                    ) : (
                        <div className="search-bar-container-not-home">
                            <input
                                onKeyPress={this.handleKeyPress}
                                className="search-bar"
                                type="text"
                                placeholder="Search videos, people, and more"
                                onChange={this.update()} />
                            <div className="search-results">
                                {
                                    sorted.map((post, i) => {
                                        return <SearchItem
                                                    key={`search-item-${i}`}
                                                    history={history} 
                                                    post={post}/>
                                    })
                                }
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default SearchBar;