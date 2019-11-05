import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import ChangePass from '../components/ChangePass';

const mapstToProps = state => {
 
  return {
    username: state.InforUserReducer.username,
    password: state.InforUserReducer.password,
    token: state.InforUserReducer.token,
    
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changePass: (username,password,newpassword)=>{
         dispatch(actions.changePasswordRequest(username,password,newpassword))
    },

  };
};
const ChangePassContainer = connect(
  mapstToProps,
  mapDispatchToProps
)(ChangePass);

export default ChangePassContainer;
