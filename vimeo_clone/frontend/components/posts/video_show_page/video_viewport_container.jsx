import { connect } from 'react-redux';
import { createPlay } from '../../../actions/play_actions'
import VideoViewport from './video_viewport'

const msp = state => {
    const { session, entities } = state
    return {
        session,
        entities
    }
}

const mdtp = dispatch => {
    return {
        clearPlay: () => dispatch(createPlay()),
    }
}

export default connect(
    msp, 
    mdtp
)(VideoViewport);