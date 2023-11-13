import { connect } from 'react-redux';
import { logout } from '../../../actions/session_actions'
import UploadVideos from './upload_videos';

const msp = (state, ownProps) => {
    return {  
        ownProps
    };
};

const mdtp = dispatch => {
    return {
        processForm: () => dispatch(logout())
    };
};

export default connect(
    msp,
    mdtp
)(UploadVideos)