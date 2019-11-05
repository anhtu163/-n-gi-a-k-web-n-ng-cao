import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import InforUser from '../components/InforUser';

const mapstToProps = state => {
  const st = state.InforUserReducer;
  return {
    username: st.username,
    password: st.password,
    name: st.name,
    phone: st.phone,
    token: st.token,
    isLogin: st.isLogin,
    image: st.image
    
  };
};

const mapDispatchToProps = dispatch => {
  return {
   
    updateUser: (username,name,phone,image) =>{
        dispatch(actions.updateRequest(username,name,phone,image))
    },
    
  };
};
const InforUserContainer = connect(
  mapstToProps,
  mapDispatchToProps
)(InforUser);

export default InforUserContainer;
