import React, { Component } from 'react'
import { Router, Scene } from 'react-native-router-flux';
import Home from "./components/Home";
import Chat from "./components/Chat";
  
export class Route extends Component {
  render() {
    return (
        <Router>
            <Scene key="root">
                <Scene key="home" component={Home} title="Home"/>
                <Scene key="chat" component={Chat} title="Live Chat"/>
            </Scene>
        </Router>
    )
  }
}

export default Route;