import Login from '../StateFull/LoginPage/Login'
import { registerUser} from '../Actions'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
    user: state.user
  })
const mapDispatchToProps = dispatch => ({
  register: data =>{
    dispatch(registerUser(data))
  }
  })
  export default connect(
    mapStateToProps,mapStateToProps,mapDispatchToProps
  )(Login);
