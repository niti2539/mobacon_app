import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Header,Left,Body,Right,Title,Button } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Entypo'
import { NavigationActions } from 'react-navigation';
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
                <Button transparent style={{display:(this.props.menu) ? 'flex' : 'none'}}>
                    <Icon name='menu' onPress={()=>Actions.drawerOpen()} color="#fff" size={30}/>
                </Button>
                <Button transparent style={{display:(this.props.back) ? 'flex' : 'none'}} 
                        onPress={()=>{this.props.backTo()}}>
                    <Icon name='chevron-thin-left'  color="#fff" size={20}/>
                </Button>
            </Left>
            <Body style={{flex: 1}} >
                <Title style={{alignSelf:'center'}}>{this.props.title}</Title>
            </Body>
            <Right style={{flex: 0}} />
        </Header>
    );
  }


}

const Style = StyleSheet.create({
    Header: {
        backgroundColor:'#79BFBC',
        marginBottom: 0,
    }
})