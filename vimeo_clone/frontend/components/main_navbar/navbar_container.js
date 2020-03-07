import { logout } from '../../actions/session_actions'
import HomeNavbar from './main_navbar'
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return {
        state
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

