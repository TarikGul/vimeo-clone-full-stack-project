const queryString = require('query-string');

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

        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.update = this.update.bind(this);
        this.sort = this.sort.bind(this);
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
        const values = queryString.parse(this.props.location.search)
        const prevValues = queryString.parse(prevProps.location.search)
        if (prevProps.location.pathname !== this.props.location.pathname) {
            this.setState({ search: '' });
        } else if (values.q !== prevValues.q) {
            this.setState({ search: '' });
        };
    }

    update() {
        if (Object.values(this.props.entities.posts).length === 0) {
            return null;
        }
        return (e) => {    
            this.sort(e.currentTarget.value);
        }
    }

    handleKeyPress(e) {
        const { cursor, result, search } = this.state;
        const { history, ui } = this.props;
        if (e.charCode === 13) {
            if (cursor !== -1) {
                //Reset values
                this.setState({ result: [], search: '', cursor: -1 });
                this.myRef.value = '';

                //Push to the page of the post
                let postId = ui.search.results[cursor].id;
                history.push(`/posts/${postId}`);
            } else if (cursor === -1 && search.length !== 0) {
                //Reset values
                this.setState({ result: [], search: '', cursor: -1 });
                
                //Push to new URL for search
                history.push(`/search?q=${this.state.search.split(' ').join('+')}`);
            }
        } else if (e.keyCode === 38 && cursor >= 0) {
            //Move cursor down in the outputs
            e.preventDefault();
            this.setState(prevState => ({
                cursor: prevState.cursor - 1
            }));
        } else if (e.keyCode === 40 && cursor < result.length - 1) {
            //Move cursor up the outputs
            e.preventDefault();
            this.setState(prevState => ({
                cursor: prevState.cursor + 1
            }));
        } else if (e.keyCode === 8 && search.length === 1) {
            // If there is one letter left in the input process the backspace,
            // and reset the values in the state
            this.setState({ result: [], search: '' });
        }
    }

    sort(str) {
        const { entities, dispatchResults } = this.props;
        const posts = Object.values(entities.posts);
        const len = str.length;
        let results = [];

        if (len === 0) return results;

        if (posts.length === 0) return results; 

        for(let i = 0; i < posts.length; i++) {
            if (posts[i].title.slice(0, len).toLowerCase() === str.toLowerCase()) {
                results.push(posts[i]);
            };
        }
        
        this.setState({ result: results, search: str });
        dispatchResults(results);
    }

    

    render() {
        const { cursor, result } = this.state;
        const { history } = this.props;

        return (
            <div className='outer-search-bar-container'>
                {
                    result.length === 0
                    ?
                    (
                        <div className='search-bar-container-not-home'>
                            <input
                                ref={(el) => this.myRef = el}
                                onKeyDown={this.handleKeyPress}
                                className='search-bar'
                                type='text'
                                placeholder='Search videos, people, and more'
                                onChange={this.update()} />
                        </div>
                    ) : (
                        <div className='search-bar-container-not-home'>
                            <input
                                ref={(el) => this.myRef = el}
                                onClick={this.handleClick}
                                onKeyDown={this.handleKeyPress}
                                onKeyPress={this.handleKeyPress}
                                className='search-bar'
                                type='text'
                                placeholder='Search videos, people, and more'
                                onChange={this.update()} />
                            <div className='search-results'>
                                {
                                    result.map((post, i) => {
                                        return <SearchItem
                                                    classColor={cursor === i 
                                                        ? 
                                                        'search-post-title active' 
                                                        : 
                                                        'search-post-title'}
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