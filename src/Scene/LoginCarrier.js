import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, Alert } from 'react-native'
import { Button } from 'react-native-elements'
import { Actions } from 'react-native-router-flux'
import t from 'tcomb-form-native'
import FormStyle from '../../asset/StyleSheet/FormStyle'
import { Wrap, FooterStyle } from '../../asset/StyleSheet/CommonStyle'
import Header from './Components/Header'
import { connect } from 'react-redux'

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

const img = {
  SoftBank:require('Mobacon/asset/img/logo/SoftBank.png'),
  KDDI:require('Mobacon/asset/img/logo/KDDI.png'),
  UQcom:require('Mobacon/asset/img/logo/UQcom.png'),
  docomo:require('Mobacon/asset/img/logo/docomo.png'),
  rakuten:require('Mobacon/asset/img/logo/rakuten.png'),
}

class LoginCarrier extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <View style={Wrap}>

        <View>
          <Header title={this.props.title} />
          <Image source={img[this.props.company]} resizeMode='contain' style={Style.logo}/>
          
          <Text
            style={{
              marginTop:10,
              fontSize:40,
              color:'#3B4859'
            }}
          > LOGIN </Text>
          <View style={{padding:12}}>
            
            <Form 
              ref="formLogin"
              type={ loginStruct }
              options={options}
              value = { this.state.value }
              // onChange={this.onChange.bind(this)}
            />
          </View>

          
        </View>

        <View style={FooterStyle}>
          <Button title="LOGIN" buttonStyle={{
            marginTop:0,
            backgroundColor: '#5FB2AE',
            width: '100%',
            height: 58,
            borderRadius: 5
          }}
          onPress={()=>{()=>Actions.home()}}
          />
        </View>
      </View>
    );
  }
}


const Style = StyleSheet.create({
  logo:{
    height:200,
    width:250,
    alignSelf:'center'
  }
})

const MapStateToProps = state => {
  return state
}

export default connect(MapStateToProps)(LoginCarrier);