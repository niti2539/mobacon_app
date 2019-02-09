import React, { Component } from 'react';
import { View, Text, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
// import t from 'tcomb-form-native';
import FormStyle from '../../asset/StyleSheet/FormStyle';
import { Wrap, FooterStyle, FooterBtn } from '../../asset/StyleSheet/CommonStyle';
import { connect } from 'react-redux';
import { ForgetPasswordAction } from '../Controller/AuthUserController';
import { Content, Form, Item, Input, Label, Picker,Icon } from 'native-base';
import HeaderCustom from './Components/Header'

class ForgetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: '',
    };
  }

  render() {
    return (


      <View style={Wrap}>
        <HeaderCustom title={this.props.title} back backTo={()=>Actions.login()}/>
        <Content>

          <View>
            <Text
              style={{
                marginTop:0,
                fontSize:40,
                color:'#3B4859'
              }}
            > FORGET PASSWORD </Text>

            <View style={{padding:12}}>
              <Text
                style={{width:'70%',
                  fontSize:18,
                  marginBottom:20,
                  color:'#8392A7'}}
              >Login with your phone number and get ready to pay less and have better mobile subscriptions.</Text>

              <Form>
                <Label style={FormStyle.Label}>PHONE NUMBER</Label>
                <Item style={FormStyle.Item}>
                  <Input value={this.state.phone} onChangeText={(text)=>this.setState({phone:text})} keyboardType='numeric'/>
                </Item>
              </Form>
            </View>

          </View>

        </Content>
        <View style={FooterStyle}>
            <Button title="SEND" buttonStyle={FooterBtn} onPress={()=>{ (ForgetPasswordAction(this.state.phone))? Actions.login() : Alert.alert('SEND','Error',[{text: 'Close'}],{ cancelable: false }) }} />
        </View>

      </View>
    );
  }
}


const MapStateToProps = state => {
  return state
}

export default connect(MapStateToProps)(ForgetPassword);