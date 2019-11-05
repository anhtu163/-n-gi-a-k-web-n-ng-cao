export const initialState = {
  username: '',
  password: '',
  name: '',
  phone: '',
  token: '',
  isLogin: false,
  image: '',
  isGG: false,
  isFB: false,
};

const InforUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN': {
      const st = { ...state };
      
      st.username = action.data.username;
      st.password = action.data.password;
      try {
        st.token = action.data.res.data.token;
        st.name = action.data.res.data.user.name;
        st.phone = action.data.res.data.user.phone;
        st.image = action.data.res.data.user.image;
        st.isLogin = true;
      
      } catch (err) {
        st.token = 'err';
      }
      return st;
    }

    case 'LOGIN_FACEBOOK': {
      return {
        ...state,
        name: action.data.res.name,
        token: action.data.res.accessToken,
        image: action.data.res.picture.data.url,
        isLogin: true,
        isFB: true
      };
    }

    case 'LOGIN_GOOGLE': {
      return {
        ...state,
        name: action.data.res.w3.ig,
        image: action.data.res.w3.Paa,
        token: action.data.res.Zi.access_token,
        isLogin: true,
        isGG: true
      };
    }

    case 'UPDATE': {
      

      return {
        ...state,
        username: action.data.res.data.username,
        name: action.data.res.data.name,
        phone: action.data.res.data.phone,
        image: action.data.res.data.image
      };
    }

    case 'PLAY':
      return {
        ...state,
        token: action.data.token
      };

    case 'CHANGE_PASSWORD': {
      
      return {
        ...state,
        password: action.data.newpassword
      };
    }

    case 'LOGOUT': {
      return initialState;
    }

    default:
      return state;
  }
};

export default InforUserReducer;
