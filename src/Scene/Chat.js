 import React, { Component } from 'react'
import { View } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'
import { connect } from 'react-redux'
import { FetchMessage, SendMessage } from '../Controller/ChatController'
import HeaderCustom from './Components/Header'
import {Actions} from 'react-native-router-flux'

 
class Chat extends Component {
  constructor(props){
    super(props);
  }

  componentWillMount() {
    
    let id = this.props.AuthUserReducer.info.plan.id; 
    let planPro = (id == 2) ? true : false;
    if(!planPro) Actions.promotion();
    FetchMessage();
  }
  

  render() {
    return (
      <View>
        <HeaderCustom title={this.props.title} backTo={()=>Actions.home()} back={true} />
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