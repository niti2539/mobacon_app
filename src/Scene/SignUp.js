import React, { Component } from 'react';
import { View, Text, CheckBox } from 'react-native';
import { Button } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import t from 'tcomb-form-native';
import FormStyle from '../../asset/StyleSheet/FormStyle';
import { Wrap, Footer } from '../../asset/StyleSheet/CommonStyle';

var Form = t.form.Form;

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      termCheck:false
    };
  }

  termCheck() {
    this.setState({
      termCheck:!this.state.termCheck
    })
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
        },
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
          > SIGNUP </Text>
          <View style={{padding:12}}>
            <Text
              style={{width:'85%',
                fontSize:18,
                marginBottom:20,
                color:'#8392A7'}}
            >We need your phone number in order to recommed you a better phone subscription.</Text>
            <Form 
              ref="formLogin"
              type={loginStruct}
              options={options}
            />
            <View >
              <CheckBox value={this.state.termCheck} onChange={()=>this.termCheck()}/>
              <Text>
                <Text>I accept the </Text>
                <Text style={{fontWeight:'bold',textDecorationLine:'underline'}}>Terms & Conditions</Text>
              </Text>
            </View>

          </View>
        </View>

        <View style={Footer}>
          <Button title="CONTINUE" buttonStyle={{
            marginBottom:0,
            backgroundColor: '#5FB2AE',
            width: '100%',
            height: 58,
            borderRadius: 5
          }} />
        </View>
      </View>
    );
  }
}
