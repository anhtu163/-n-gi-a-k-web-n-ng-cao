const initialState = {
    username: '',
    password: '',
    isLogin: false,
    isPlay: false,
    token: '',
    name: ''
  };


  const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
      case "LOGIN": {
        const st = { ...state };
        st.username = action.data.username;
        st.password = action.data.password;
        try {
         
          st.token = action.data.res.data.token;
          st.name = action.data.res.data.user.name;
          st.isLogin = true;
        } catch (err) {
          
          st.token = 'err';
        }
        return st;
      }
      case "LOGOUT": {
        const st = { ...state };
        st.name = '';
        st.token = '';
        st.isLogin = false;
        st.isPlay = false;
        st.username = '';
        st.password = '';
        return st;
      }
      default:
        return state;
    }
  };
  
  export default LoginReducer;
  