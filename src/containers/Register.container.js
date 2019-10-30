import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import Register from '../components/Register';

const mapStateToProps = state => {
  const RegisterState = state.RegisterReducer;
  return {
    username: RegisterState.username,
    password: RegisterState.password,
    isRegister: RegisterState.isRegister,
    phone: RegisterState.phone,
    name: RegisterState.name,
    CheckLoadRegister: RegisterState.CheckLoadRegister
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
