const initialState = {
    username: '',
    password: '',
    newpassword: '',
    token: '',
    isChangePass: false
  };


  const ChangePassReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ACCESS_CHANGE_PASS":{
            return{
                ...state,
                isChangePass: true,
            }
        }
        case "CHANGE_PASSWORD": {
            return{
                ...state,
                username : action.data.username,
                password : action.data.password,
                newpassword : action.data.newpassword,
            }
        }
        case "BACK_CHANGE_PASS":{
            return{
                ...state,
                isChangePass: false
            }
        }

      default:
        return state;
    }
  };
  
  export default ChangePassReducer;
  