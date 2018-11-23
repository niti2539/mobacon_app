import React, { Component } from 'react'
import { Router, Scene, Actions } from 'react-native-router-flux'
import Home from './Scene/Home'
import LoginCarrier from "./Scene/LoginCarrier"
import Chat from "./Scene/Chat"
import Login from "./Scene/Login"
import SignUp from "./Scene/SignUp"
import ConfirmCode from "./Scene/ConfirmCode"
import { View, Text, Alert, BackHandler } from 'react-native';
  
export class Route extends Component {
    componentDidMount() {
        
    }
  render() {
    return (
        <Router navigationBarStyle={{backgroundColor:'#79BFBC'}}>
            <Scene key="root" titleStyle={style.titleStyle} leftButtonIconStyle={style.leftButtonStyle} >
                <Scene key="login" component={Login} title="LOGIN" initial />
                <Scene key="signUp" component={SignUp} title="SIGNUP" />
                <Scene key="confirmCode" component={ConfirmCode} title="CONFIRM CODE" />
                <Scene key="home" component={Home} title="ANALYZE BILL" hideNavBar />
                <Scene key="LoginCarrier" component={LoginCarrier} title="LOGIN INTO YOUR ACCOUNT" hideNavBar />
                <Scene key="chat" component={Chat} title="Live Chat"/>
            </Scene>
        </Router>
    )
  }
}

const style = {
    titleStyle: {
        color: '#fff',
    },
    leftButtonStyle:{
        tintColor:'white'
        
    }
}


export default Route;