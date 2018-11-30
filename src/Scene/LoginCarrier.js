import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, WebView } from 'react-native'
import { Button } from 'react-native-elements'
import { Actions } from 'react-native-router-flux'
import FormStyle from '../../asset/StyleSheet/FormStyle'
import { Wrap, FooterStyle } from '../../asset/StyleSheet/CommonStyle'
import HeaderCustom from './Components/Header'
import { connect } from 'react-redux'

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
        <HeaderCustom title={this.props.title} menu={false} back={true} />
        <WebView source={{uri:'https://www.softbank.jp/en/corp/'}} />
        
        {/* <View>
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
       */}
       
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