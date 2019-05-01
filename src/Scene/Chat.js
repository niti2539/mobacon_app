import React, { Component } from "react";
import { View, SafeAreaView } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import { connect } from "react-redux";
import { store } from "../Store/index";
import API_URL from "../ApiProvider";
// import { FetchMessage, SendMessage } from '../Controller/ChatController'
import HeaderCustom from "./Components/Header";
import { Actions } from "react-native-router-flux";
import { TokenTimeOut } from "../Controller/AuthUserController";

import io from "socket.io-client/dist/socket.io";

class Chat extends Component {
  constructor(props) {
    super(props);
    const host = "https://mobacon-api.pieros.site/";
    this.socket = io.connect(host, {
      query: {
        token: this.props.AuthUserReducer.token
      }
    });
    this.FetchOperator = this.FetchOperator.bind(this);
    this.FetchOldChat = this.FetchOldChat.bind(this);
    this.SendMessage = this.SendMessage.bind(this);
    this.FetchSelfMessage = this.FetchSelfMessage.bind(this);
  }

  componentDidMount() {
    let id = this.props.AuthUserReducer.info.plan.id;
    // id = 2;
    let planPro = id === 2;
    if (!planPro) Actions.promotion();
    // FetchMessage();

    this.setState({
      messages: this.props.ChatReducer.messages
    });

    this.Authorized();
    this.FetchOldChat();
    this.FetchSelfMessage();
    this.FetchOperator();
  }

  Authorized() {
    this.socket.on("authorized", res => {
      console.log(res);
      // { ok: false,error: { name: 'JsonWebTokenError', message: 'token is invalid' } }
      if (res.ok) {
        if (res.token != undefined)
          store.dispatch({ type: "PATCH_TOKEN", payload: res.token });
      } else {
        TokenTimeOut().then(() => Actions.login());
      }
    });
  }

  FetchOldChat() {
    this.socket.emit("mobile-old-chat", { existChat: 0 }, res => {
      // console.log(res)
      if (res.ok) {
        store.dispatch({ type: "CLEAR"});
        for (key in res.data.reverse()) {
          // console.log(res.data[key])
          let data = res.data[key];
          let msgObj = {
            _id: data._id,
            text: data.message,
            user: {
              _id: data.sender.role.id,
              name:
                data.sender.role.id == 3
                  ? this.props.AuthUserReducer.info.fullName
                  : data.request.carrier.name,
              avatar:
                data.sender.role.id == 3
                  ? API_URL.Host + this.props.AuthUserReducer.info.imagePath
                  : ""
            },
            createdAt: new Date(data.createdAt)
          };
          store.dispatch({ type: "PUSH_MESSAGE", payload: msgObj });
        }
        this.setState({
          messages: this.props.ChatReducer.messages
        });
      }
    });
  }

  SendMessage(msg) {
    console.log(msg[0].text);
    this.socket.emit("mobile-chat", { text: msg[0].text }, res => {
      console.log(res);
      if (!res.ok) {
        console.log(res.message);
      } else {
        store.dispatch({ type: "PUSH_MESSAGE", payload: msg });
        this.setState({
          messages: this.props.ChatReducer.messages
        });
      }
    });
  }

  FetchSelfMessage() {
    this.socket.on("mobile-self-chat", res => {
      if (res.ok) {
        try{
          console.log("Respoinse mobile-self-chat")
          var msgObj = {
            _id: res.data._id,
            text: res.data.message,
            user: {
              _id: 3,
              name: this.props.AuthUserReducer.info.fullName,
              avatar: API_URL.Host + this.props.AuthUserReducer.info.imagePath
            },
            createdAt: new Date(data.createdAt)
          };
          
        }catch(err){
          alert("Can't send message "+ err);
        }
        store.dispatch({ type: "PUSH_MESSAGE", payload: msgObj });
        this.setState({
          messages: this.props.ChatReducer.messages
        });
      }
    });
  }

  FetchOperator() {
    this.socket.on("web-chat", res => {
      if (res.ok) {
        let msgObj = {
          _id: res.data._id,
          text: res.data.message,
          user: {
            _id: 2,
            name: res.data.request.carrier.name
            // avatar: API_URL.Host + this.props.AuthUserReducer.info.imagePath
          },
          createdAt: new Date(res.data.createdAt)
        };
        store.dispatch({ type: "PUSH_MESSAGE", payload: msgObj });
        this.setState({
          messages: this.props.ChatReducer.messages
        });
      }
    });
  }

  render() {
    let {
      ChatReducer: { messages }
    } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <HeaderCustom
          title={this.props.title}
          menu
        />
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
          <GiftedChat
            messages={messages}
            user={{
              _id: 3,
              name: this.props.AuthUserReducer.info.fullName,
              avatar: API_URL.Host + this.props.AuthUserReducer.info.imagePath
            }}
            onSend={messages => this.SendMessage(messages)}
            showUserAvatar={true}
          />
        </SafeAreaView>
      </View>
    );
  }
}

const MapStateToProps = state => {
  return state;
};

export default connect(MapStateToProps)(Chat);
