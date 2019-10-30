import { combineReducers } from 'redux';
import GameReducer from './Game.Reducer';
import LoginReducer from './Login.Reducer';
import RegisterReducer from './Register.Reducer';
import HomePageReducer from './HomePage.Reducer';

const myReducer = combineReducers({
  GameReducer,
  LoginReducer,
  RegisterReducer,
  HomePageReducer
});
export default myReducer;
