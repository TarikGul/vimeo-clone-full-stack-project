import { connect } from 'react-redux'
import Homepage from './homepage'
import { fetchPosts } from '../../actions/post_actions'

const mapStateToProps = (state, ownProps) => {
    return {
        entities: state.entities,
        posts:  Object.values(state.entities.posts),
        ownProps
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPosts: () => dispatch(fetchPosts())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Homepage)