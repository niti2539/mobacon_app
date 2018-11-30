 import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { connect } from 'react-redux';
import { FetchMessage, SendMessage } from '../Controller/ChatController';
import HeaderCustom from './Components/Header'

 
class Chat extends Component {
  constructor(props){
    super(props);
  }

  componentWillMount() {
    FetchMessage();
  }
  

  render() {
    return (
      <View>
        <HeaderCustom title={this.props.title} menu={false} back={true} />
        <GiftedChat
          messages={ this.props.ChatReducer.messages }
          onSend={messages => SendMessage({messages:messages})}
          user = {{
            _id: this.props.InitialReducer.UserToken,
            name: 'React Native',
            avatar: require('Mobacon/asset/img/user.jpg'),
          }}
          showUserAvatar={true}
          />
      </View>

    )
  }
}

const MapStateToProps = state => {
  return state
}

export default connect(MapStateToProps)(Chat);