import React from 'react'
import ReactGA from 'react-ga';
import PostInfoRow from './post_info_row'
import DeleteButton from './delete_button'


class BottomContainer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            clicked: false,
            oneClicked: false,
            loading: false
        }

        this.uncheck = this.uncheck.bind(this)
        this.handleClickOne = this.handleClickOne.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.allPosts = this.allPosts.bind(this)
        this.deleteClick = this.deleteClick.bind(this)
    }

    componentDidMount() {
        if (window.location.hostname !== 'localhost') {
            ReactGA.initialize('UA-162754702-1');
            ReactGA.pageview('/manage/videos');
        }
    }

    allPosts(posts) {
        const ids = []
        for(let i = 0; i < posts.length; i++) {
            ids.push(posts[i].id)
        }
        this.setState({ posts: ids })
    }

    uncheck() {
        let checks = document.getElementsByClassName('checkbox-manage-videos')
        for(let i = 0; i < checks.length; i ++) {
            if(checks[i].checked) {
                checks[i].checked = false;
            };
        };
    };

    deleteClick(e) {
        window.alert('Because this is a clone, delete is disabled. Check out the repo for delete functionality')
        // Event("DELETE", "Delete button clicked", "DELETE_PAGE");
        ReactGA.event({
            category: "DELETE",
            action: "Delete button clicked",
            label: "DELETE_PAGE"
        });
        // const { entities, userId } = this.props;
        // let nodes = [];
        // let checks = document.getElementsByClassName('checkbox-manage-videos');
        // let values = Object.values(entities.users[userId].user_posts);


        // for(let i = 1; i < checks.length; i++) {
        //     if(checks[i].checked) {
        //         let index = i;
        //         nodes.push(index);
        //     }
        // }

        // for(let i = 0; i < nodes.length; i++) {
        //     let index = parseInt(nodes[i]) - 1
        //     let node = values[index].id
        //     this.props.deletePost(node)
        //         .then(() => {
        //             this.props.fetchUser(this.props.userId)
        //         })
        //         .then(() => {
        //             this.uncheck()
        //         })
        // }
        // this.setState({ 
        //     clicked: false,
        //     oneClicked: false
        //  })
    }

    handleClickOne(e){
        let count = 0
        let checks = document.getElementsByClassName('checkbox-manage-videos')
        for(let i = 0; i < checks.length; i++) {
            if (checks[i].checked) {
                count += 1
            }
        }
        if (count >= 1) {
            this.setState({ oneClicked: true })
        } else {
            this.setState({ oneClicked: false })
        }
    }

    handleClick(e) {
        e.preventDefault();
        
        let clickedState;
        if(this.state.clicked === true) {
            clickedState = false
        } else {
            clickedState = true
        }
        
        this.setState({ clicked: clickedState })
    }

    render() {
        const { entities, userId, ownProps } = this.props

        if (userId === null) {
            return null
        } else if(this.state.loading === true) {
            <div>Loading</div>
        } else if (entities.users[userId].user_posts === undefined) {
            return (
            <div className="bottom-container-manage-videos">
                <div className="bottom-container-manage-videos-block">
                    <div className="bottom-container-manage-videos-top-manager">
                        <div className="manage-videos-top-row-left">
                            <div className="checkbox-manage-videos">
                                <input className="manage-videos-checkbox" type="checkbox" onClick={this.handleClick} />
                            </div>
                            <div className="manage-videos-title-sorter">
                                Title
                            </div>
                        </div>
                        <div className="manage-videos-top-row-right">
                            <div className="manage-videos-privacy">
                                Privacy
                            </div>
                            <div className="manage-videos-modified-date">
                                Modified
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
        }
        const postKeys = Object.values(entities.users[userId].user_posts)
        return (
            <div className="bottom-container-manage-videos">
                <div className="delete-post-container">
                    {
                        this.state.clicked || this.state.oneClicked
                        ?
                        (
                            <DeleteButton deleteClick={this.deleteClick} />
                        ):(
                            null
                        )
                    }
                </div>
                <div className="bottom-container-manage-videos-block">
                    <div className="bottom-container-manage-videos-top-manager">
                        <div className="manage-videos-top-row-left">
                            <div className="checkbox-manage-videos">
                                <input className="manage-videos-checkbox" type="checkbox" onClick={this.handleClick} />
                            </div>
                            <div className="manage-videos-title-sorter">
                                Title
                            </div>
                        </div>
                        <div className="manage-videos-top-row-right">
                            <div className="manage-videos-privacy">
                                Privacy
                            </div>
                            <div className="manage-videos-modified-date">
                                Modified
                            </div>
                        </div>
                    </div>
                    {
                        postKeys.map((post, i) => {
                            return <PostInfoRow
                                        handleClick={this.handleClickOne}
                                        clicked={this.state.clicked}
                                        key={`post-info-${i}`}
                                        ownProps={ownProps} 
                                        post={post}/>
                        })
                    }
                </div>
            </div>
        )
    }
}

export default BottomContainer;