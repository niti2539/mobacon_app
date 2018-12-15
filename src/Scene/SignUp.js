import React, { Component } from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
// import t from 'tcomb-form-native';
import FormStyle from '../../asset/StyleSheet/FormStyle';
import { Wrap, FooterStyle,FooterBtn } from '../../asset/StyleSheet/CommonStyle';
import { connect } from 'react-redux';
import { SignUpAction } from '../Controller/AuthUserController';
import {  ListItem, CheckBox, Body } from 'native-base';
import { Actions } from 'react-native-router-flux'
import {Avatar} from 'react-native-elements'
import { Content, Form, Item, Input, Label, Picker,Icon } from 'native-base';
import HeaderCustom from './Components/Header'

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username:'',
      phone:'',
      password:'',
      avatarSource: null,
      termCheck:!false
    };
  }

  onChange(value) {
    this.setState({ value :value });
  }

  termCheck() {
    this.setState({
      value : this.state.value,
      termCheck:!this.state.termCheck
    })
  }

  async onSignUp(){
    let username = this.state.username;
    let phone = this.state.phone;
    let password = this.state.password;
    if(this.state.termCheck == true){
      if(phone != '' || password != ''){
        let data = await SignUpAction(phone,password);
        if(data){ 
          
          this.setState({username:'',
          phone: '',
          password:''});
          this.termCheck();
          Actions.confirmCode();

        } else { 

          this.setState({username:this.state.username,
          phone: this.state.phone,
          password:''});
          this.termCheck();

        }
       }
    }
  }

  onAvatarChange(){
    const options = {};
    
  }

  render() {

    return (
      <View style={Wrap}>
        <HeaderCustom title={this.props.title} menu={false} back={true} backTo={()=>Actions.login()}/>
        <Content>

          <View>
            <Text
              style={{
                marginTop:10,
                fontSize:40,
                color:'#3B4859'
              }}
            > SIGNUP </Text>
            <View style={{padding:12}}>
              <Text
                style={{width:'70%',
                  fontSize:18,
                  marginBottom:20,
                  color:'#8392A7'}}
              >We need your phone number in order to recommed you a better phone subscription.</Text>
              <Form>
                {/* <Avatar
                  size="large"
                  source={this.state.avatarSource}
                  onPress={() => this.onAvatarChange()}
                  activeOpacity={0.7}
                /> */}
                <Label style={FormStyle.Label}>USERNAME</Label>
                <Item style={FormStyle.Item}>
                  <Input value={this.state.username} onChangeText={(text)=>this.setState({username:text})} />
                </Item>
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
              <View >
                <ListItem style={{borderBottomWidth:0,marginLeft:0}}>
                  <CheckBox checked={this.state.termCheck} onPress={()=>this.termCheck()} color="green" CheckboxRadius={5} checkboxSize={30} checkboxBgColor='#fff'/>
                  <Body style={{flexDirection: 'row'}}>
                    <Text  numberOfLines={1} > Terms & Conditions</Text>
                    <Text style={{fontWeight:'bold',textDecorationLine:'underline'}}> Terms & Conditions</Text>
                  </Body>
                </ListItem>
              </View>

            </View>
          </View>
        </Content>

        <View style={FooterStyle}>
          <Button title="CONTINUE" buttonStyle={FooterBtn} onPress = {()=>this.onSignUp()} />
        </View>
      </View>
    );
  }
}


// const MapStateToProps = state => {
//   return state
// }


// export default connect(MapStateToProps)(SignUp);
export default (SignUp);