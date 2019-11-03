import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import ChangePass from '../components/ChangePass';

const mapstToProps = state => {
  const st = state.ChangePassReducer;
  return {
    username: state.LoginReducer.username,
    password: st.password,
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
    backChangePass : () => {
        dispatch(actions.backChangePass())
    }

  };
};
const ChangePassContainer = connect(
  mapstToProps,
  mapDispatchToProps
)(ChangePass);

export default ChangePassContainer;
