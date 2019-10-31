import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import InforUser from '../components/InforUser';

const mapstToProps = state => {
  const st = state.InforUserReducer;
  return {
    username: state.LoginReducer.username,
    password: st.password,
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
    backUpdate: (name) => {
        dispatch(actions.backUpdate(name))
    },
    updateUser: (username,name,phone) =>{
        dispatch(actions.updateRequest(username,name,phone))
    },
    logOut: ()=>{
        dispatch(actions.LogOut())
    }

  };
};
const InforUserContainer = connect(
  mapstToProps,
  mapDispatchToProps
)(InforUser);

export default InforUserContainer;
