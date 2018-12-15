import React, { Component } from 'react';
import { View, Text } from 'react-native';
import CardDetail from './Components/CardDetail'
import HeaderCustom from './Components/Header'
import { Wrap, FooterStyle, FooterBtn } from '../../asset/StyleSheet/CommonStyle'
import { Actions } from 'react-native-router-flux'

export default class ReportHistoryDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const data = {
      header:['PERIOD ANALYZED','01 May - 30 May',''],
      Item:[
          {
              title:'MINUTES USED',
              value:'512'
          },
          {
              title:'SMS SENT',
              value:'89'
          },
          {
              title:'INTERNET TRAFFIC USED',
              value:'2.4 GB'
          },
          {
              title:'CLOUD STORAGE USED',
              value:'10.1 GB / 20 GB'
          },
      ]
  }
    return (
      <View style={Wrap}>
        <HeaderCustom title={this.props.title} backTo={()=>Actions.ReportHistory()} back={true}/>
        <CardDetail footer={false} data={data}/>

      </View>
    );
  }
}
