import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import t from 'tcomb-form-native';
import FormStyle from '../../asset/StyleSheet/FormStyle';
import { Wrap, Footer } from '../../asset/StyleSheet/CommonStyle';

var Form = t.form.Form;

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    let loginStruct = t.struct({
      phone : t.Number,
      password : t.String,
    })

    let options = {
      fields : {
        phone :{
          label: "PHONE NUMBER"
        },
        password:{
          label: "PASSWORD",
          password : true,
          secureTextEntry :true,
          help : <Text style={{color:'#79BFBC',fontWeight:'bold'}}>Forget Password</Text>
        }
      },
      stylesheet : FormStyle,
    }

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
              style={{width:'85%',
                fontSize:18,
                marginBottom:20,
                color:'#8392A7'}}
            >Login with your phone number and get ready to pay less and have better mobile subscriptions.</Text>
            <Form 
              ref="formLogin"
              type={loginStruct}
              options={options}
            />
          </View>

          <Button title="LOGIN" buttonStyle={{
            marginTop:0,
            backgroundColor: '#5FB2AE',
            width: '100%',
            height: 58,
            borderRadius: 5
          }} />
        </View>

        <View style={Footer}>
          <TouchableOpacity onPress={()=>Actions.signUp()} style={{alignSelf:'center'}}>
            <Text>
              <Text>Don’t have an account? </Text>
              <Text>Sign Up!!</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
