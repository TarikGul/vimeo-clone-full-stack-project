import { connect } from 'react-redux';
import { createPlay } from '../../../actions/play_actions'
import VideoViewport from './video_viewport'
import { withRouter } from 'react-router-dom'

const msp = state => {
    const { session, entities } = state
    return {
        sessionId: session.id,
        entities
    }
}

const mdtp = dispatch => {
    return {
        createPlay: play => dispatch(createPlay(play)),
    }
}

export default withRouter(connect(
    msp, 
    mdtp
)(VideoViewport));