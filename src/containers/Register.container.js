import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import Register from '../components/Register';

const mapStateToProps = state => {
  const st = state.RegisterReducer;
  return {
    // username: st.username,
    // password: st.password,
    isRegister: st.isRegister,
    // phone: st.phone,
    // name: st.name,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    Register: (name,phone,username, password) => {
      dispatch(actions.registerRequest(name,phone,username, password));
    }
  };
};
const RegisterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);

export default RegisterContainer;
