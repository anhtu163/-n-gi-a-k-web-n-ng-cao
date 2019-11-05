import { connect } from 'react-redux';
import * as action from '../actions/actions';
import Game from '../components/Game';


const mapStateToProps = (st)=>{
    const state = st.GameReducers;
    return {
      history: state.history,
      stepNumber: state.stepNumber,
      xIsNext: state.xIsNext,
      winner: state.winner,
      isSort: state.isSort,
      isLogin: st.InforUserReducer.isLogin,
      
    }
  };
  
  const mapDispatchToProps = (dispatch) =>{
  
    return{
      setWinner: (history,squares,currentMove,i,col,row,winner) =>{
        dispatch(action.setWinner(history,squares,currentMove,i,col,row,winner));
      },
      saveHistory: (history,squares,currentMove,i,col,row) =>{
        dispatch(action.saveHistory(history,squares,currentMove,i,col,row));
      },
      jumpTo: (step)=>{
        dispatch(action.jumpTo(step))
      },
      sortHistory: ()=>{
        dispatch(action.sortF())
      },
      // back: ()=>{
      //   dispatch(action.back())
      // }
    }
  };

  const GameContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Game);
  
  export default GameContainer;