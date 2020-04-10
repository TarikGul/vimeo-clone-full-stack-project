import React from 'react'
import SearchItem from './search_item';

class SearchBar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            search: '',
            result: [],
            cursor: -1
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
        return (e) => {    
            this.sort(e.currentTarget.value)
        }
    }

    handleKeyPress(e) {
        const { cursor, result } = this.state
        if (e.charCode === 13) {
            // This is where you add the search results to the global state
            // Redirect to the search results page,
            // Allow the user to pick which video they want to go to.
            console.log('you pressed enter')
        } else if (e.keyCode === 38 && cursor > 0) {
            this.setState(prevState => ({
                cursor: prevState.cursor - 1
            }))
            console.log(this.cursor)
        } else if (e.keyCode === 40 && cursor < result.length - 1) {
            this.setState(prevState => ({
                cursor: prevState.cursor + 1
            }))
        }
    }

    sort(str) {
        const { entities, dispatchResults } = this.props
        const posts = Object.values(entities.posts)
        const len = str.length
        let results = []
        if (len === 0) return results;

        if (posts.length === 0) return results; 

        for(let i = 0; i < posts.length; i++) {
            if (posts[i].title.slice(0, len) === str) {
                results.push(posts[i])
            };
        }   
        dispatchResults(results)
        this.setState({ result: results })

    }

    render() {
        const { cursor, result } = this.state;
        const { history } = this.props;

        return (
            <div className="outer-search-bar-container">
                {
                    result.length === 0
                    ?
                    (
                        <div className="search-bar-container-not-home">
                            <input
                                onKeyDown={this.handleKeyPress}
                                className="search-bar"
                                type="text"
                                placeholder="Search videos, people, and more"
                                onChange={this.update()} />
                        </div>
                    ) : (
                        <div className="search-bar-container-not-home">
                            <input
                                onKeyDown={this.handleKeyPress}
                                className="search-bar"
                                type="text"
                                placeholder="Search videos, people, and more"
                                onChange={this.update()} />
                            <div className="search-results">
                                {
                                    result.map((post, i) => {
                                        return <SearchItem
                                                    classColor={cursor === i ? 'search-post-title active' : 'search-post-title'}
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