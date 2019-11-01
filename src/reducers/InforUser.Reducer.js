const initialState = {
    username: '',
    password: '',
    name: '',
    phone: '',
    isUpdate: false
  };


  const InforUserReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_USER": {
        return{
            ...state,
            username : action.data.res.data.username,
            name : action.data.res.data.name,
            phone : action.data.res.data.phone,
            isUpdate: true
            
        }
      }
      case "GET_USER_HOME":{
        return{
          ...state,
          username : action.data.res.data.username,
          name : action.data.res.data.name,
          phone : action.data.res.data.phone
        }
      }
      case "BACK_UPDATE":{
        return{
            ...state,
            isUpdate: false
        }
      }
      case "UPDATE": {
        return{
            ...state,
            
            username: action.data.res.data.username,
            name: action.data.res.data.name,
            phone: action.data.res.data.phone,
            isUpdate: false
        }
      }
      
      default:
        return state;
    }
  };
  
  export default InforUserReducer;
  