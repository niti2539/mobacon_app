import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AsyncStorage 
} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import firebase from 'firebase';


export default class Chat extends Component {
  state = {
    messages: [],
    test:""
  }

  componentWillMount() {
    var config = {
      apiKey: "AIzaSyD4-e1qmtQdZR0X0Q7b8X-0CUoyBfckcFQ",
      authDomain: "mobacon-117e8.firebaseapp.com",
      databaseURL: "https://mobacon-117e8.firebaseio.com",
      projectId: "mobacon-117e8",
      storageBucket: "mobacon-117e8.appspot.com",
      messagingSenderId: "283582925998"
    };
    firebase.initializeApp(config);

    AsyncStorage.getItem("UserToken").then((value)=>{
      
      if(value == undefined){
        let key = firebase.database().ref().child('message').push().key;
        AsyncStorage.setItem("UserToken",key);
        AsyncStorage.getItem("UserToken").then((value)=>{
          this.setState({
            UserToken: value
          })
        });
      }
      this.setState({
        UserToken: value,
      })
      this.onLoadedData();
      
    });
  }

  onLoadedData(){
    firebase.database().ref('message/'+this.state.UserToken).on('value',(snepshot)=>{
      let data = snepshot.val();
      if(data != null){
        let arr = [];
        for(i in data){
          arr.push(data[i]);
        }
        arr = arr.reverse();
  
        this.setState({
          messages: arr
        })
      }
      // console.log(data);
    })
  }

  
  onSend(messages = []) {
    
    firebase.database().ref('message/'+this.state.UserToken).push(messages[0]);
    if(this.state.messages == undefined){
      this.onLoadedData();
    }
    
    
    // this.setState(previousState => ({
    //   messages: GiftedChat.append(previousState.messages, messages),
    // }))
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: this.state.UserToken,
          name: 'React Native',
          avatar: require('Mobacon/asset/img/user.jpg'),
        }}
        showUserAvatar={true}
      />

    )
  }
}