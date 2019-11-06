import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import Login from '../components/Login';

const mapstToProps = state => {
  return {
    username: state.InforUserReducer.username,
    password: state.InforUserReducer.password,
    isLogin: state.InforUserReducer.isLogin,
    token: state.InforUserReducer.token,
    
  };
};

const mapDispatchToProps = dispatch => {
  return {
    Login: (username, password) => {
      dispatch(actions.loginRequest(username, password));
    },
    LoginFB: (res)=>{
      dispatch(actions.loginfb(res))
    },
    LoginGG: (res)=>{
      dispatch(actions.logingg(res))
    }
  };
};
const LoginContainer = connect(
  mapstToProps,
  mapDispatchToProps
)(Login);

export default LoginContainer;
