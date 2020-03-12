import React from 'react'
import PostInfoRow from './post_info_row'


class BottomContainer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            clicked: false,
            oneClicked: false
        }

        this.uncheck = this.uncheck.bind(this)
        this.handleClickOne = this.handleClickOne.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.allPosts = this.allPosts.bind(this)
        this.deleteClick = this.deleteClick.bind(this)
    }

    allPosts(posts) {
        const ids = []
        debugger
        for(let i = 0; i < posts.length; i++) {
            ids.push(posts[i].id)
        }
        this.setState({ posts: ids })
    }

    uncheck() {
        let checks = document.getElementsByClassName('checkbox-manage-videos')
        for(let i = 0; i < checks.length; i ++) {
            if(checks[i].checked) {
                checks[i].checked = false
            }
        }
    }

    deleteClick(e) {
        const { entities, userId } = this.props
        let nodes = []
        let checks = document.getElementsByClassName('checkbox-manage-videos')
        let values = Object.values(entities.users[userId].user_posts)


        for(let i = 1; i < checks.length; i++) {
            if(checks[i].checked) {
                // let index = checks[i].getAttribute('data-val')
                let index = i
                nodes.push(index)
            }
        }

        for(let i = 0; i < nodes.length; i++) {
            let index = parseInt(nodes[i]) - 1
            console.log(index)
            console.log(values)
            console.log(values[index])
            let node = values[index].id
            this.props.deletePost(node)
                .then(() => {
                    this.props.fetchUser(this.props.userId)
                }).then(() => {
                    this.uncheck()
                })
        }
        this.setState({ 
            clicked: false,
            oneClicked: false
         })
    }

    handleClickOne(e){
        console.log(this.props)
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
        // debugger
        const { entities, userId, ownProps } = this.props
        if(entities.users[userId].user_posts === undefined) {
            return null
        }
        const postKeys = Object.values(entities.users[userId].user_posts)
        return (
            <div className="bottom-container-manage-videos">
                {
                    this.state.clicked || this.state.oneClicked
                    ?
                    (
                        <button className="delete-post" onClick={this.deleteClick}>Delete</button>
                    ):(
                        null
                    )
                }
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