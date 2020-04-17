import { connect } from 'react-redux';
import AvailableStorage from './available_storage';

const msp = state => {
    const { entities, session } = state;
    return {
        sessionId: session.id,
        entities,
    };
};

const mdtp = dispatch => {
    return {
        
    };
};

export default connect(
    msp,
    mdtp
)(AvailableStorage);