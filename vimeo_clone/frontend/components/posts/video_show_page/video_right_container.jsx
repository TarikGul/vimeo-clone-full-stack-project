import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import VideoRight from './video_right';

const msp = state => {
    return {
        entities: state.entities
    };
};

const mdtp = props => {
    return {

    };
};

export default withRouter(connect(
    msp,
    mdtp
)(VideoRight))