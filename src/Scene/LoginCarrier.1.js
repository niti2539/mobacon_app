import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';

class LoginCarrier extends Component {
    render() {
      return (
        <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
            <Text
              style={{
                textAlign: "center",
                fontSize: 20,
                color: "#6200EE",
                marginTop: 10}}
            >
              This feature is only {"\n"}
              available in pro mode. {"\n"}
              Please upgrade to pro {"\n"}
              and you will get {"\n"}
              -Live chat {"\n"}
              -Report history {"\n"}
              -Etc
              {this.props.AuthUserReducer.token}
            </Text>

            <Button
              onPress={()=>{Actions.chat()}}
              buttonStyle={
                {
                  backgroundColor: "#6200EE",
                  marginBottom: 10
                }
              }
              title='UPGRADE YO PRO'
            />
        </View>

      );
    }
  }

  const MapStateToProps = state => {
    return state
  }
  
  export default connect(MapStateToProps)(LoginCarrier);