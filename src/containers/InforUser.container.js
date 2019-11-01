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
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUser: (token) => {
      dispatch(actions.getUserRequest(token));
    },
    getUserHome: (token)=>{
      dispatch(actions.getUserRequest(token))
    },
    backUpdate: () => {
        dispatch(actions.backUpdate())
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
