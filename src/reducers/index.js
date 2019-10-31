import { combineReducers } from 'redux';
import GameReducer from './Game.Reducer';
import LoginReducer from './Login.Reducer';
import RegisterReducer from './Register.Reducer';
import HomePageReducer from './HomePage.Reducer';
import InforUserReducer from './InforUser.Reducer';

const myReducer = combineReducers({
  GameReducer,
  LoginReducer,
  RegisterReducer,
  HomePageReducer,
  InforUserReducer
});
export default myReducer;
