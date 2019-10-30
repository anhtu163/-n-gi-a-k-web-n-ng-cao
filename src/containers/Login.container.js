import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import Login from '../components/Login';

const mapstToProps = state => {
  const st = state.LoginReducer;
  return {
    username: st.username,
    password: st.password,
    isLogin: st.isLogin,
    isPlay: state.HomePageReducer.isPlay,
    token: st.token
  };
};

const mapDispatchToProps = dispatch => {
  return {
    Login: (username, password) => {
      dispatch(actions.loginRequest(username, password));
    }
  };
};
const LoginContainer = connect(
  mapstToProps,
  mapDispatchToProps
)(Login);

export default LoginContainer;
