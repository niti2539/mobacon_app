import React, { Component } from 'react'
import { View, Alert, StyleSheet, Image, WebView } from 'react-native'
import { Button } from 'react-native-elements'
import { Actions } from 'react-native-router-flux'
import FormStyle from '../../asset/StyleSheet/FormStyle'
import { Wrap, FooterStyle } from '../../asset/StyleSheet/CommonStyle'
import HeaderCustom from './Components/Header'
import { connect } from 'react-redux'

const url = {
  SoftBank:'https://id.my.softbank.jp/sbid_auth/type1/2.0/authorization.php?response_type=code&client_id=o00aXYC6xABycFsvzmgFARqc0oa1nCau&redirect_uri=https%3A%2F%2Fmy.softbank.jp%2Fmsb%2Fd%2Fauth%2FdoReceiveSbid&display=touch&prompt=login%20consent&scope=openid&nonce=2018121021082757116NZ20KJHiU6TyJ&ui_locales=ja&weblinkid=MSB020063&acr_value=1&amr=me',
  KDDI:'https://connect.auone.jp/net/vwc/cca_lg_eu_nets/login?targeturl=https%3A%2F%2Fmy.au.com%2Faus%2Fhc-cs%2Flic%2FLIC0020001.hc',
  UQcom:'https://my.uqmobile.jp/leo-bs-ptl-web/view/PSYSATH001_90/init/?_adp_cd_id=lgCEMgD3DgFhNGeJ-JjJ6wgxTS8vRJN3.0.1544444007&_ga=2.33213368.70278028.1544443928-495164499.1544443928',
  docomo:'https://cfg.smt.docomo.ne.jp/auth/cgi/anidlogin_mltdom?arcv=eAGNi9EKgjAYhd9l1-H-zU2dEKWb6yqS6qarYQplqBMaSUTv3qwX6Fx95_AdBorqmOmYxCJjEctpnhSxZDzTUghQkvqNhILmRGoFDLhvXIcFhCLhSq8pkAQEYfDNCwFK0WFTHNECkRmvzo33FONpmoLBucbWtrdBbYPbiPvnr2Iv03C2iSce_f1btXXbLOW-NJfOnqtuqB6tcdZsT8ocdyV6fwBU1kDY',
  rakuten:require('Mobacon/asset/img/logo/rakuten.png'),
}

class LoginCarrier extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEnabled: false,
    };
  }

  enableAnalyseButton = (url) => {
    if (url.toLowerCase().includes('billitems')) {
      this.setState({isEnabled: true})
    }
  }

  _onNavigationStateChange(webViewState){
    this.enableAnalyseButton(webViewState.url);
    this.setState({url: webViewState.url});
  }

  onGetRawHTLM(){
    fetch(this.state.url,{
      method: 'GET'
    }).then(res => res.text()).then(string=> {
      Alert.alert('Already sent your request to the server');
    });
  }

  render() {
    const { isEnabled } = this.state;
    return (
      <View style={Wrap}>
        <HeaderCustom title={this.props.title} menu />
        <WebView 
          source={{uri:url[this.props.Global.carrier]}}
          onNavigationStateChange={this._onNavigationStateChange.bind(this)} />
        
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
        */}
        {isEnabled && 
          <View style={FooterStyle}>
            <Button title="ANALYZE MY BILL" buttonStyle={{
              marginTop:0,
              backgroundColor: '#5FB2AE',
              width: '100%',
              height: 58,
              borderRadius: 5
            }}
            onPress={()=>{this.onGetRawHTLM()}}
            />
          </View>
        }
      
       
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