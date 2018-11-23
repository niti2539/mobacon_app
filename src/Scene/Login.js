import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import { Actions, ActionConst } from 'react-native-router-flux';
import t from 'tcomb-form-native';
import FormStyle from '../../asset/StyleSheet/FormStyle';
import { Wrap, FooterStyle } from '../../asset/StyleSheet/CommonStyle';
import { connect } from 'react-redux';
import { LoginAction } from '../Controller/AuthUserController';
import {  Body } from 'native-base';

var Form = t.form.Form;
let loginStruct = t.struct({
  phone : t.Number,
  password : t.String,
})

let options = {
  auto: 'placeholders',
  fields : {
    phone :{
      label: "PHONE NUMBER",
      underlineColorAndroid:'transparent'
    },
    password:{
      label: "PASSWORD",
      password : true,
      secureTextEntry :true,
      help : <Text style={{color:'#79BFBC',fontWeight:'bold'}}>Forget Password</Text>,
      underlineColorAndroid:'transparent'
    }
  },
  stylesheet : FormStyle,
}

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
  }

  onChange(value) {
    this.setState({ value :value });
  }

  async onLogin(){
    let value = this.refs.formLogin.getValue();
    if(value) {
      let data = await LoginAction(value.phone,value.password)
    
      // console.log(data)
      if(data){
        this.setState({value:null})
      }else{
        this.setState({value:{phone:this.state.value.phone,password:''}})
      }
    }
  }

  render() {
    return (
      <View style={Wrap}>
        <View>
          <Text
            style={{
              marginTop:10,
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
            <Form 
              ref="formLogin"
              type={ loginStruct }
              options={options}
              value = { this.state.value }
              onChange={this.onChange.bind(this)}
            />
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

        <View style={FooterStyle}>
          <TouchableOpacity onPress={()=>Actions.signUp()} style={{marginBottom:0,alignSelf:'center'}}>
            <Text>
              <Text>Don’t have an account? </Text>
              <Text style={{fontWeight:'bold',textDecorationLine:'underline'}} >Sign Up!!</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}


const MapStateToProps = state => {
  return state
}

export default connect(MapStateToProps)(Login);