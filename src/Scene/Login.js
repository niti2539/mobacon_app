import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { Button } from 'react-native-elements';
import { Actions, ActionConst } from 'react-native-router-flux';
// import t from 'tcomb-form-native';
import FormStyle from '../../asset/StyleSheet/FormStyle';
import { Wrap, FooterStyle, FooterBtn } from '../../asset/StyleSheet/CommonStyle';
import { connect } from 'react-redux';
import { LoginAction } from '../Controller/AuthUserController';
import { Content, Form, Item, Input, Label, Picker,Icon } from 'native-base';
import HeaderCustom from './Components/Header'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: '0902595194',
      password: 'Test',
      modalVisible: false
    };
  }

  async onLogin(){
    if(this.state.phone != '' ||this.state.password != '') {
      this.setState({phone:'',password:''})
      let data = await LoginAction(this.state.phone,this.state.password)
      // console.log(data)
      if(!data){
        this.setState({phone:this.state.phone,password:''})
      }else{
        Actions.home();
      }

    }else{
        this.setState({phone:this.state.phone,password:''})
    }
  }

  render() {
    return (


      <View style={Wrap}>
        <HeaderCustom title={this.props.title} />
        <Content>

          <View>
            <Text
              style={{
                marginTop:0,
                fontSize:40,
                color:'#3B4859'
              }}
            > LOGIN </Text>

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
                <Label style={FormStyle.Label}>PASSWORD</Label>
                <Item style={FormStyle.Item}>
                  <Input value={this.state.password} onChangeText={(text)=>this.setState({password:text})} secureTextEntry/>
                </Item>
                <TouchableOpacity 
                  style={{alignSelf:'flex-end'}} 
                  onPress={() => {
                    this.setState({modalVisible:!this.state.modalVisible});
                  }}>
                    <Text style={{color:'#79BFBC',fontWeight:'bold'}}>Forget Password</Text>
                </TouchableOpacity>
              </Form>
            </View>

            <Button title="LOGIN" buttonStyle={{
              marginTop:0,
              backgroundColor: '#5FB2AE',
              width: '100%',
              height: 58,
              borderRadius: 5
            }}
            onPress={()=>{this.onLogin()}}
            />
          </View>

        </Content>
        <View style={FooterStyle}>
          <TouchableOpacity onPress={()=>Actions.signUp()} style={{marginBottom:0,alignSelf:'center'}}>
            <Text>
              <Text>Don’t have an account? </Text>
              <Text style={{fontWeight:'bold',textDecorationLine:'underline'}} >Sign Up!!</Text>
            </Text>
          </TouchableOpacity>
        </View>
        <Modal
          animationType="fade"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            
            // Alert.alert('Modal has been closed.');
          }}>
            <View style={Object.assign({},Wrap,{backgroundColor:"#F9FAFC",padding:12})}>
              <Text style={{
                marginTop:10,
                fontSize:40,
                color:'#3B4859'
              }}>FORGET PASSWORD</Text>
              <View style={{flex:1,padding:12}}>
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
              <View style={FooterStyle}>
                <Button title="SEND" buttonStyle={FooterBtn} onPress = {()=>this.setState({modalVisible:!this.state.modalVisible})} />
              </View>
            </View>
        </Modal>

      </View>
    );
  }
}


const MapStateToProps = state => {
  return state
}

export default connect(MapStateToProps)(Login);