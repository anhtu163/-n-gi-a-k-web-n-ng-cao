import { combineReducers } from 'redux';
import GameReducers from './Game.Reducer';
// import LoginReducer from './Login.Reducer';
import RegisterReducer from './Register.Reducer';
import HomePageReducer from './HomePage.Reducer';
import InforUserReducer from './InforUser.Reducer';


const myReducer = combineReducers({
  GameReducers,
  RegisterReducer,
  HomePageReducer,
  InforUserReducer,
  
  
});
export default myReducer;
