

export const initialState = {
  // username: '',
  // password: '',
  isRegister: '',
  // name: ''
};

const RegisterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER": {
      const st = { ...state };
      st.username = action.data.username;
      st.password = action.data.password;
      try {
        st.name = action.data.res.data.name;
        st.isRegister = 'success';
      } catch (error) {
        st.isRegister = 'err';
      }
      return st;
    }
    default:
      return initialState;
  }
};

export default RegisterReducer;
