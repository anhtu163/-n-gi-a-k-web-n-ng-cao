import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import ChangePass from '../components/ChangePass';

const mapstToProps = state => {
  const st = state.ChangePassReducer;
  return {
    username: state.LoginReducer.username,
    password: state.LoginReducer.password,
    newpassword: st.newpassword,
    token: st.token,
    isChangePass: st.isChangePass
    
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changePass: (username,password,newpassword)=>{
         dispatch(actions.changePasswordRequest(username,password,newpassword))
    },
    backChangePass : (newpassword) => {
        dispatch(actions.backChangePass(newpassword))
    },
    backChangePass1 : () => {
      dispatch(actions.backChangePass1())
    },
    logIn : (username,password)=>{
      dispatch(actions.loginRequest(username,password))
    }

  };
};
const ChangePassContainer = connect(
  mapstToProps,
  mapDispatchToProps
)(ChangePass);

export default ChangePassContainer;
