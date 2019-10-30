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
export const OPEN_MENU = 'OPEN_MENU'
export const CLOSE_MENU = 'CLOSE_MENU'

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

export const jumpTo = (step)=>({
    type: JUMP_TO,
    step
})

export const sortF = () =>({
    type: SORT,  
})

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
  
  export const LogOut = () => {
    return {
      type: LOGOUT
    };
  };

  export const play = (name,token) =>{
    return {
      type: PLAY,
      data:{
        name,
        token
      }
    }
  }

  
  export const back = () =>{
    return {
      type: BACK
    }
  }

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
