import React, { Component } from 'react';
import { View, Text } from 'react-native';
import CardReport from './Components/CardReport'
import HeaderCustom from './Components/Header'
import { Wrap, FooterStyle, FooterBtn } from '../../asset/StyleSheet/CommonStyle'

export default class ReportHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={Wrap}>
        <HeaderCustom title={this.props.title} menu={false} back={true} />
        <CardReport/>
      </View>
    );
  }
}
