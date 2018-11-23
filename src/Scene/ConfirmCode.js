import React, { Component } from 'react';
import { View, Text, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button } from 'react-native-elements';
import { Wrap, FooterStyle,FooterBtn } from '../../asset/StyleSheet/CommonStyle';
import { connect } from 'react-redux';
import CodeInput from 'react-native-confirmation-code-input';


class ConfirmCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
      termCheck:false
    };
  }

  async ConfirmCode(){
    if(this.state.confirmCode == '1234'){
      Alert.alert(
        'Confirmation Code',
        'Successful!',
        [{text: 'OK'}],
        { cancelable: false })

      Actions.login();


    }else{
      Alert.alert(
        'Confirmation Code',
        'Code not match!',
        [{text: 'OK'}],
        { cancelable: false })
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
          > Confirm Code </Text>
          <View style={{padding:12}}>
            <Text
              style={{width:'70%',
                fontSize:18,
                marginBottom:20,
                color:'#8392A7'}}
            >We sent you a 4 digit code on your mobile phone number so we can verify that is your number.</Text>

            <Text
              style={{
                marginTop:10,
                fontSize:14,
                color:'#3B4859',
                fontWeight:"bold"
              }}
            > 4 DIGIT CODE </Text>

            <CodeInput
              ref="codeInputRef1"
              className={'border-b'}
              space={20}
              size={80}
              codeLength={4}
              codeInputStyle={{fontSize:30,color:'#79BFBC'}}
              activeColor='#79BFBC'
              inactiveColor='#79BFBC'
              inputPosition='center'
              /*onFulfill={(code) => code == '1234' ? 
              ) :}*/
              onFulfill={(code)=> this.setState({confirmCode:code})}
            />

          </View>
        </View>

        <View style={FooterStyle}>
          <Button title="CONFIRM NUMBER" buttonStyle={FooterBtn} onPress = {()=>this.ConfirmCode()} />
        </View>
      </View>
    );
  }
}


const MapStateToProps = state => {
  return state
}

export default connect(MapStateToProps)(ConfirmCode);