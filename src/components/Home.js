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
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Home extends Component {
    render() {
      return (
        <View>
            <Text>Home</Text>
            <TouchableOpacity onPress={()=>{Actions.chat()}}>
                <Text>Go to Chat</Text>
            </TouchableOpacity>
            <Button
              onPress={()=>{Actions.chat()}}
              icon={
                <Icon
                  name='arrow-right'
                  size={15}
                  color='white'
                />
              }
              title='BUTTON WITH ICON COMPONENT'
            />
        </View>

      );
    }
  }