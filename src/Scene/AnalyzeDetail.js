import React, { Component } from 'react';
import { View, Text } from 'react-native';
import CardDetail from './Components/CardDetail'
import Header from './Components/Header'
import { Wrap, FooterStyle, FooterBtn } from '../../asset/StyleSheet/CommonStyle'

export default class AnalyzeDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const data = {
      header:['OFFER NAME','$15.00','/ month'],
      Item:[
          {
              title:'MINUTES',
              value:'2000 / month'
          },
          {
              title:'SMS',
              value:'1000 / month'
          },
          {
              title:'INTERNET TRAFFIC',
              value:'4 GB / month'
          },
          {
              title:'CLOUD STORAGE',
              value:'20 GB'
          },
      ]
  }
    return (
      <View style={Wrap}>
        <Header title={this.props.title} menu/>
        <CardDetail footer={true} data={data}/>

      </View>
    );
  }
}
