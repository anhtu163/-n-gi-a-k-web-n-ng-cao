export const initialState = {
    
    isPlay: false,
    isMenu: false,
    
    
  };

const HomePageReducer = (state = initialState,action) => {
    switch(action.type){
        case "PLAY":
            return {
                ...state,
                isPlay: true
            }
        case "BACK":
            return{
                initialState
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
            return initialState;

    }
}

export default HomePageReducer