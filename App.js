import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { YellowBox } from 'react-native';
import store from './src/Store/index';
import Route from './src/Router'
import InitialApp from './src/Controller/InitialController';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader','Setting a timer']);

export default class App extends Component {

  componentDidMount(){
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

