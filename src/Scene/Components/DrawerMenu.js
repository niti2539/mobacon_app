import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux'
import { StyleSheet } from "react-native";
import { Container, Content, List, ListItem, Text } from 'native-base';
import store from '../../Store/index'
import {Wrap,FooterStyle} from '../../../asset/StyleSheet/CommonStyle'
import Icon from 'react-native-vector-icons/AntDesign'
import { LogoutAction } from '../../Controller/AuthUserController'
export default class DrawerMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <Container style={{...Wrap,...{backgroundColor:'#3B4859'}}}>
            <Content>
                {/* <Image
                    source={{uri: "https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/react-navigation/img/drawer-cover.png"}}
                    style={{
                    height: 120,
                    alignSelf: "stretch",
                    justifyContent: "center",
                    alignItems: "center"}}>
                    <Image
                        square
                        style={{ height: 80, width: 70 }}
                        source={{
                            uri: "https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/react-navigation/img/logo.png"
                        }}/>
                </Image> */}
                <Text
                    style={{
                        height:120,
                        textAlign:'center',
                        color:'#76D5CE',
                        fontSize: 15,
                        textAlignVertical:'center',
                        backgroundColor: '#FFFFFF'
                    }}>
                    APP NAME OR LOGO
                </Text>
                <List style={{paddingTop:10}}>
                    <ListItem
                        style={style.ListItem}
                        button
                        onPress={() => Actions.home()}>
                        <Text style={style.text}>HOME</Text>
                    </ListItem>
                    <ListItem
                        style={style.ListItem}
                        button
                        onPress={() => Actions.Analyze()}>
                        <Text style={style.text}>ANALYZE MY BILL</Text>
                    </ListItem>
                    <ListItem
                        style={style.ListItem}
                        button
                        onPress={() => Actions.chat()} >
                        <Text style={style.text}>LIVE CHAT </Text>
                        <Text style={style.textHighlight}>(PRO)</Text>
                    </ListItem>
                    <ListItem
                        style={style.ListItem}
                        button
                        onPress={() => Actions.ReportHistory() }>
                        <Text style={style.text}>REPORT HISTORY </Text>
                        <Text style={style.textHighlight}>(PRO)</Text>
                    </ListItem>
                    <ListItem
                        style={style.ListItem}
                        button
                        /*onPress={() => Actions.ReportHistory()}*/>
                        <Text style={style.text}>PLAN SELECTION</Text>
                    </ListItem>
                    <ListItem
                        style={style.ListItem}
                        button
                        /*onPress={() => Actions.ReportHistory()}*/>
                        <Text style={style.text}>SETTINGS</Text>
                    </ListItem>
                    <ListItem
                        last
                        button
                        onPress={() => {if(LogoutAction()) Actions.login()}}>
                        <Text style={style.text}>LOGOUT</Text>
                    </ListItem>
                </List>
            </Content>
        </Container>
    );
  }
}

const style = StyleSheet.create({
    text:{
        fontSize : 14,
        color: '#fff'
    },
    textHighlight: {
        fontSize : 14,
        color: '#76D5CE'
    },
    ListItem:{
        borderBottomWidth:0
    }
})