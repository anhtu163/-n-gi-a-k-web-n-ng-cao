import axios from "axios"

export const HISTORIES = 'HISTORIES'
export const WINNER = 'WINNER'
export const JUMP_TO = 'JUMP_TO'
export const SORT = 'SORT'
export const LOGIN = 'LOGIN'
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const REGISTER = 'REGISTER'
export const LOGOUT = 'LOGOUT'
export const PLAY = 'PLAY'
export const BACK = 'BACK'
export const BACK_UPDATE = 'BACK_UPDATE'
export const OPEN_MENU = 'OPEN_MENU'
export const CLOSE_MENU = 'CLOSE_MENU'
export const GET_USER = 'GET_USER'
export const UPDATE = 'UPDATE'
export const GET_USER_HOME = 'GET_USER_HOME'
export const ACCESS_CHANGE_PASS = 'ACCESS_CHANGE_PASS'
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD'
export const BACK_CHANGE_PASS = 'BACK_CHANGE_PASS'
export const BACK_CHANGE_PASS_1 = 'BACK_CHANGE_PASS_1'


export const saveHistory = (history,squares,currentMove,i,COL,ROW) =>({
    type: HISTORIES,
    history,
    squares,
    currentMove,
    i,
    COL,
    ROW
})

export const setWinner = (history,squares,currentMove,i,COL,ROW,winner)=>({
    type: WINNER,
    history,
    squares,
    currentMove,
    i,
    COL,
    ROW,
    winner
})

// jump to 1 time in history list

export const jumpTo = (step)=>({
    type: JUMP_TO,
    step
})

// sort history list

export const sortF = () =>({
    type: SORT,  
})

// log in

function OnClickLogin(username,password) {
    const res = axios.post('http://localhost:4000/user/login',{
        username,
        password
    }).catch(error =>{
        return error;
    })
    console.log(res)
    return res;
}

export const login = (username,password,res) => ({
    
    type: LOGIN,
    data: {
        username,
        password,
        res
    }
   
    
})

export const loginRequest = (username, password) =>{
    return dispatch =>{
        return OnClickLogin(username,password).then(res=>{
            dispatch(login(username,password,res));
        })
    }
}

// register

function OnclickRegister(name,phone, username, password) {
    const res = axios
      .post('https://restfulapi1612839.herokuapp.com/user/register', {
        name,
        phone,
        username,
        password
      })
      .catch(error => {
        return error;
      });
    return res;
  }
  
  export const register = (name,phone, username, password, res) => {
    return {
      type: REGISTER,
      data: { name,phone, username, password, res }
    };
  };
  
  export const registerRequest = (name,phone, username, password) => {
    return dispatch => {
      return OnclickRegister(name,phone, username, password).then(res => {
        dispatch(register(name,phone, username, password, res));
      });
    };
  };
  
  // log out
  export const LogOut = () => {
    return {
      type: LOGOUT
    };
  };

  // change from homepage to gamepage

  export const play = (name,token) =>{
    return {
      type: PLAY,
      data:{
        name,
        token
      }
    }
  }

  // back from gamepage to homepage

  export const back = () =>{
    return {
      type: BACK
    }
  }

  // back from updatepage to homepage

  export const backUpdate = () =>{
    return {
      type: BACK_UPDATE,
    }
  }

  export const backChangePass = (newpassword) =>{
    return {
      type: BACK_CHANGE_PASS,
      data:{
        newpassword
      }
    }
  }

  export const backChangePass1 = () =>{
    return {
      type: BACK_CHANGE_PASS_1,
    }
  }


  // open and close menu on Homepage

  export const openMenu = (value)=>{
    return {
      type: OPEN_MENU,
      data:{
        value
      } 
    }
  }

  export const closeMenu = ()=>{
    return {
      type: CLOSE_MENU,
    }
  }


  // Get info user

  function onClickGetUser(token){
    const res = axios.get('http://localhost:4000/me',{
      headers:{Authorization: `Bearer ${token}`}
    }).catch(err=>{
      return err
    })
    console.log(res);
    return res;
  }

  export const getUser = (token,res)=>{
    return {
      type: GET_USER,
      data:{
        token,
        res
      }
    }
  }

  export const getUserHome = (token,res)=>{
    return {
      type: GET_USER_HOME,
      data:{
        token,
        res
      }
    }
  }

  export const getUserRequest = (token)=>{
    return( dispatch=>{
      return onClickGetUser(token).then(res=>{
        dispatch(getUser(token,res));
      })
    })
  }

  export const getUserHomeRequest = (token)=>{
    return( dispatch=>{
      return onClickGetUser(token).then(res=>{
        dispatch(getUserHome(token,res));
      })
    })
  }



  // update info user

  function onClickUpdate(username,name,phone){
    const res = axios.post('http://localhost:4000/user/update',{
      username,
      name,
      phone
    }).catch(err=>{
      return err
    })
    return res
  }

  export const update = (username,name,phone,res) =>{
    return{
      type: UPDATE,
      data:{
        username,
        name,
        phone,
        res
      }
    }
  }
  export const updateRequest = (username,name,phone) =>{

    return (dispatch=>{
      return onClickUpdate(username,name,phone).then(res=>{
        dispatch(update(username,name,phone,res))
      })
    })
  }

  // chang password

  export const accessChangePass = () => {
    return{
      type: ACCESS_CHANGE_PASS,
    }
  }

  function onClickChangePassword(username,password,newpassword){
    const res = axios.post('http://localhost:4000/user/changepass',{
      username,
      password,
      newpassword
    }).catch(err=>{
      return err
    })
    return res
  }

  export const changePassword = (username, password,newpassword,res) =>{
    return {
      type: CHANGE_PASSWORD,
      data: {
        username,
        password,
        newpassword,
        res
      }
    }
  }

  export const changePasswordRequest = (username, password,newpassword) =>{
    return(dispatch =>{
      return onClickChangePassword(username,password,newpassword).then(res=>{
        dispatch(changePassword(username,password,newpassword,res))
      })
    })
  }
  
