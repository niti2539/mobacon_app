import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { YellowBox, BackHandler, DeviceEventEmitter, Alert } from 'react-native';
import store from './src/Store/index';
import Route from './src/Router'
import InitialApp from './src/Controller/InitialController';
import { Actions } from 'react-native-router-flux'

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader','Setting a timer']);

export default class App extends Component {

  componentDidMount(){
    DeviceEventEmitter.removeAllListeners('hardwareBackPress')
    DeviceEventEmitter.addListener('hardwareBackPress', () => {

      try {
        Actions.pop();
        return true;
      }
      catch (err) {
        BackHandler.exitApp()
        return false;
      }
    })

    new InitialApp();
  }

  render() {
    return (
      <Provider store={ store }>
        <Route/>
      </Provider>
    );
  }
}

