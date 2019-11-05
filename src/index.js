import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
// import {Provider} from 'react-redux';
import throttle from 'lodash/throttle';
import {createStore, applyMiddleware}  from 'redux';
// import {BrowseRouter as Router, Route, Switch} from 'react-router-dom';
import myReducers from './reducers/index';
import Container from './containers/Containers';


import './index.css';


import * as serviceWorker from './serviceWorker';

const loadState = () => {
    try {
      const serializedState = localStorage.getItem('state');
  
      if(serializedState === null) {
        return undefined;
      }
  
      return JSON.parse(serializedState);
    } catch (e) {
      return undefined;
    }
  };
  
  const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
  
      localStorage.setItem('state', serializedState);
    } catch (e) {
      // Ignore write errors;
    }
  };
  
 const peristedState = loadState();

// container
const store = createStore(myReducers,peristedState,applyMiddleware(thunk)) /*  */

store.subscribe(throttle(() => {
    saveState(store.getState());
  }, 1000));

ReactDOM.render(
    <Provider store={store}>
        <Container/>
    </Provider>,
 document.getElementById('root')
 );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
