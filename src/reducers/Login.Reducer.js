const initialState = {
    username: '',
    password: '',
    isLogin: false,
    isPlay: false,
    token: '',
    name: '',
    isGG: false,
    isFB: false,
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
          st.isLogin = !state.isLogin;
        } catch (err) {
          
          st.token = 'err';
        }
        return st;
      }

      case "LOGIN_FACEBOOK":{
        return {
          ...state,
          name: action.data.res.name,
          token: action.data.res.accessToken,
          isLogin : !state.isLogin,
          isFB: true
        }
      }

      case "LOGIN_GOOGLE":{
        return {
          ...state,
          name: action.data.res.data.name,
          isLogin : !state.isLogin,
          isGG: true
        }
      }
      
      case "LOGOUT": {
        return initialState
        
      }
      default:
        return state;
    }
  };
  
  export default LoginReducer;
  