import { connect } from 'react-redux';
import * as action from '../actions/actions';
import HomePage from '../components/HomePage';


const mapStateToProps = (st)=>{
    
    return {
      name: st.LoginReducer.name,
      token: st.LoginReducer.token,
      isPlay: st.HomePageReducer.isPlay,
      isMenu: st.HomePageReducer.isMenu
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
      }
    }
  };


  const HomePageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(HomePage);
  
  export default HomePageContainer;