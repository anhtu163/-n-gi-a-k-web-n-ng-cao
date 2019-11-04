import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import InforUser from '../components/InforUser';

const mapstToProps = state => {
  const st = state.InforUserReducer;
  return {
    username: state.LoginReducer.username,
    password: state.LoginReducer.password,
    name: st.name,
    phone: st.phone,
    token: state.LoginReducer.token,
    isUpdate: st.isUpdate,
    isPlay: state.HomePageReducer.isPlay,
    isChangePass: state.ChangePassReducer.isChangePass
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUser: (token) => {
      dispatch(actions.getUserRequest(token));
    },
    
    accessChangePass :()=>{
      dispatch(actions.accessChangePass())
    },
    backUpdate: (name) => {
        dispatch(actions.backUpdate(name))
    },
    updateUser: (username,name,phone) =>{
        dispatch(actions.updateRequest(username,name,phone))
    },
    logOut: ()=>{
        dispatch(actions.LogOut())
    },
    logIn: (username,password) =>{
      dispatch(actions.loginRequest(username,password));
    }

  };
};
const InforUserContainer = connect(
  mapstToProps,
  mapDispatchToProps
)(InforUser);

export default InforUserContainer;
