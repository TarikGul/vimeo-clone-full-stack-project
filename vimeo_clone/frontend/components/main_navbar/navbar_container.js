import { connect } from 'react-redux'
import { logout } from '../../actions/session_actions'
import HomeNavbar from './main_navbar'

const mapStateToProps = (state, ownProps) => {
    return {
        state,
        ownProps,
        location: ownProps.location
    }
}

const mapDispatchToProps = dispatch => {
    return {
        processForm: () => dispatch(logout())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeNavbar)

