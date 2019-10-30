import React from 'react'
import { BrowserRouter as Router,
     Route,
     Switch 
    } from 'react-router-dom';
import LoginContainer from '../containers/Login.container'
import GameContainer from '../containers/Game.container';
// import HomePage from "./HomePage";
import RegisterContainer from '../containers/Register.container';
import HomePageContainer from '../containers/HomePage.container';

const Root = () => (
    <Router>
      
        <Switch>
        
            <Route path="/login">
              <LoginContainer/>
            </Route>
            <Route path="/register">
              <RegisterContainer/>
            </Route>
            <Route path="/home">
              <HomePageContainer/>
            </Route>
            <Route path="/">
              <GameContainer/>
            </Route>
           
              
        </Switch>  
        
    </Router>
)



export default Root