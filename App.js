import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { YellowBox, BackHandler, DeviceEventEmitter, Alert, AsyncStorage } from 'react-native';
import store from './src/Store/index';
import Route from './src/Router'
import InitialApp from './src/Controller/InitialController';
import { Actions } from 'react-native-router-flux'
import {isSignedIn} from './src/Controller/AuthUserController'
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader','Setting a timer']);



export default class App extends Component {

  componentDidMount(){
    DeviceEventEmitter.removeAllListeners('hardwareBackPress')
    DeviceEventEmitter.addListener('hardwareBackPress', () => {

      try {
        isSignedIn().then(res => {
          if(res){
            Actions.home();
          }else{
            Actions.login();
          }
        })
        
        return true;
      }
      catch (err) {
        BackHandler.exitApp()
        return false;
      }
    })

    new InitialApp();
  }

  checkLogin() {
    AsyncStorage.getItem('token').then(value => {
      if(value === null){
        return false
      }
      return true
    })
  }

  render() {
    return (
      <Provider store={ store }>
        <Route/>
      </Provider>
    );
  }
}

