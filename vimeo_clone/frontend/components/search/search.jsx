import React from 'react'
import SearchItem from './search_item';

class SearchBar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            search: ''
        }

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
        return (e) => this.setState({ search: e.currentTarget.value })
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
        console.log(foundPosts)
        return foundPosts
    }

    render() {
        const { search } = this.state;
        const { history } = this.props;
        const len = search.length;
        const sorted = this.sort(search)
        if (sorted !== undefined && sorted.length > 0) {
            console.log("the dolhpin has landed", sorted)
        }
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