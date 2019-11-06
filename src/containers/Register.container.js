import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import Register from '../components/Register';

const mapStateToProps = state => {
  const st = state.RegisterReducer;
  return {
    isRegister: st.isRegister, 
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
