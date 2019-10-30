export const initialState = {
    token: '',
    name: '',
    isPlay: false,
    isMenu: false
    
  };

const HomePageReducer = (state = initialState,action) => {
    switch(action.type){
        case "PLAY":
            return {
                ...state,
                name: action.data.name,
                token: action.data.token,
                isPlay: true
            }
        case "BACK":
            return{
                ...state,
                isPlay: false
            }
        case "OPEN_MENU":
            return{
                ...state,
                isMenu: action.data.value
            }
        case "CLOSE_MENU":
            return{
                ...state,
                isMenu: false
            }
        default:
            return state;

    }
}

export default HomePageReducer