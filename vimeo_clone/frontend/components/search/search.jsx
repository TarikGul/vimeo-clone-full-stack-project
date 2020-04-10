import React from 'react'
import SearchItem from './search_item';

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef();
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
        this.update();
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
        const { cursor, result, search } = this.state
        const { history, ui } = this.props
        if (e.charCode === 13) {
            //Empty the value of the input
            this.myRef.value = ''

            let postId = ui.search.results[cursor].id

            history.push(`/posts/${postId}`)
        } else if (e.keyCode === 38 && cursor > 0) {
            this.setState(prevState => ({
                cursor: prevState.cursor - 1
            }))
            console.log(this.cursor)
        } else if (e.keyCode === 40 && cursor < result.length - 1) {
            this.setState(prevState => ({
                cursor: prevState.cursor + 1
            }))
        } else if (e.keyCode === 8 && search.length === 1) {
            this.setState({ result: [], search: '' })
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
        this.setState({ result: results, search: str })
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
                                ref={(el) => this.myRef = el}
                                onKeyDown={this.handleKeyPress}
                                className="search-bar"
                                type="type"
                                placeholder="Search videos, people, and more"
                                onChange={this.update()} />
                        </div>
                    ) : (
                        <div className="search-bar-container-not-home">
                            <input
                                ref={(el) => this.myRef = el}
                                onClick={this.handleClick}
                                onKeyDown={this.handleKeyPress}
                                onKeyPress={this.handleKeyPress}
                                className="search-bar"
                                type="type"
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