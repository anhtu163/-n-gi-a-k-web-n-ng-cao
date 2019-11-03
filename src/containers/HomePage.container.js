import { connect } from 'react-redux';
import * as action from '../actions/actions';
import HomePage from '../components/HomePage';


const mapStateToProps = (st)=>{
    
    return {
      name: st.LoginReducer.name,
      token: st.LoginReducer.token,
      isLogin: st.HomePageReducer.isLogin,
      isPlay: st.HomePageReducer.isPlay,
      isMenu: st.HomePageReducer.isMenu,
      isUpdate: st.InforUserReducer.isUpdate
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
      getUserHome: (token)=>{
        dispatch(action.getUserHomeRequest(token))
      }
    }
  };


  const HomePageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(HomePage);
  
  export default HomePageContainer;