import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Header,Left,Body,Right,Icon,Title,Button } from 'native-base';

export default class HeaderCustom extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <Header style={Style.Header} androidStatusBarColor="#79BFBC">
            <Left style={{flex: 0}}>
                <Button transparent>
                    <Icon name='menu' />
                </Button>
            </Left>
            <Body style={{flex: 1}}>
                <Title style={{alignSelf:'center'}}>{this.props.title}</Title>
            </Body>
            <Right style={{flex: 0}} />
        </Header>
    );
  }


}

const Style = StyleSheet.create({
    Header: {
        backgroundColor:'#79BFBC'
    }
})