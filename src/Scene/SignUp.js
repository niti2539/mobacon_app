import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import t from 'tcomb-form-native';
import FormStyle from '../../asset/StyleSheet/FormStyle';
import { Wrap, FooterStyle,FooterBtn } from '../../asset/StyleSheet/CommonStyle';
import { connect } from 'react-redux';
import { SignUpAction } from '../Controller/AuthUserController';
import {  ListItem, CheckBox, Body } from 'native-base';
import { Actions } from 'react-native-router-flux'

var Form = t.form.Form;
let signUpStruct = t.struct({
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

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
      termCheck:false
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
    let value = this.refs.formSignUp.getValue();
    if(this.state.termCheck == true){
      if(value){
        Actions.confirmCode();
        // let data = await SignUpAction(value.phone,value.password);

    
        // console.log(data)
        /*if(data){
          this.setState({value:null})
        }else{
          this.setState({value:{phone:this.state.value.phone,password:''}})
        }*/
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
          > SIGNUP </Text>
          <View style={{padding:12}}>
            <Text
              style={{width:'70%',
                fontSize:18,
                marginBottom:20,
                color:'#8392A7'}}
            >We need your phone number in order to recommed you a better phone subscription.</Text>
            <Form 
              ref="formSignUp"
              type={signUpStruct}
              options={options}
              value = { this.state.value }
              onChange={this.onChange.bind(this)}
            />
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

        <View style={FooterStyle}>
          <Button title="CONTINUE" buttonStyle={FooterBtn} onPress = {()=>this.onSignUp()} />
        </View>
      </View>
    );
  }
}


const MapStateToProps = state => {
  return state
}

export default connect(MapStateToProps)(SignUp);