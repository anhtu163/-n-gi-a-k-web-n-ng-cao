import { connect } from 'react-redux';
import * as action from '../actions/actions';
import HomePage from '../components/HomePage';


const mapStateToProps = (st)=>{
    
    return {
      name: st.InforUserReducer.name,
      token: st.InforUserReducer.token,
      isLogin: st.InforUserReducer.isLogin,
      isPlay: st.HomePageReducer.isPlay,
      isMenu: st.HomePageReducer.isMenu,
      isUpdate: st.InforUserReducer.isUpdate,
      isFB: st.InforUserReducer.isFB,
      isGG: st.InforUserReducer.isGG,
      image: st.InforUserReducer.image
    }
  };

  const mapDispatchToProps = (dispatch) =>{
  
    return{
      play: (name,token) =>{
        dispatch(action.play(name,token));
      },
      logOut: ()=>{
        dispatch(action.LogOut())
      },
      openMenu: (value) =>{
        dispatch(action.openMenu(value))
      },
      closeMenu: ()=>{
        dispatch(action.closeMenu())
      },
      getUser: (token)=>{
        dispatch(action.getUserRequest(token))
      },
      
    }
  };


  const HomePageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(HomePage);
  
  export default HomePageContainer;