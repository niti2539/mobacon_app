import React, { Component } from 'react'
import { Router, Scene } from 'react-native-router-flux';
import Home from "./Scene/Home";
import Chat from "./Scene/Chat";
import Login from "./Scene/Login";
import SignUp from "./Scene/SignUp";
  
export class Route extends Component {
  render() {
    return (
        <Router>
            <Scene key="root">
                <Scene key="login" component={Login} title="Login" initial={true} />
                <Scene key="signUp" component={SignUp} title="Sign Up" />
                <Scene key="home" component={Home} title="Home"/>
                <Scene key="chat" component={Chat} title="Live Chat"/>
            </Scene>
        </Router>
    )
  }
}

export default Route;