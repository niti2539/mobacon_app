import React, { Component } from "react";
import { Actions } from "react-native-router-flux";
import HeaderCustom from "./Components/Header";
import {
  Wrap,
  FooterStyle,
  FooterBtn
} from "../../asset/StyleSheet/CommonStyle";
import {
  Container,
  Content,
  Text,
  Footer,
  Card,
  CardItem,
  Body,
  View
} from "native-base";
import { Button } from "react-native-elements";
import { StyleSheet, Image } from "react-native";
import { connect } from "react-redux";
import { store } from "../Store/index";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      select: 0
    };
  }
  render() {
    return (
      <View style={Wrap}>
        <HeaderCustom title={this.props.title} menu />
        <Content padder>
          <Card
            style={{
              borderRadius: 20,
              overflow: "hidden"
            }}
          >
            <CardItem
              button
              bord
              style={
                this.state.select == 1
                  ? Style.selectFirst
                  : { borderBottomWidth: 1, borderColor: "#F2F4F7" }
              }
              onPress={() => {
                this.setState({ select: 1, selectName: "SoftBank" });
              }}
            >
              <Body>
                <Image
                  source={require("Mobacon/asset/img/logo/SoftBank.png")}
                  resizeMode="contain"
                  style={Style.logo}
                />
              </Body>
            </CardItem>
            <CardItem
              button
              style={
                this.state.select == 2
                  ? Style.select
                  : { borderBottomWidth: 1, borderColor: "#F2F4F7" }
              }
              onPress={() => {
                this.setState({ select: 2, selectName: "KDDI" });
              }}
            >
              <Body>
                <Image
                  source={require("Mobacon/asset/img/logo/KDDI.png")}
                  resizeMode="contain"
                  style={Style.logo}
                />
              </Body>
            </CardItem>
            <CardItem
              button
              style={
                this.state.select == 3
                  ? Style.select
                  : { borderBottomWidth: 1, borderColor: "#F2F4F7" }
              }
              onPress={() => {
                this.setState({ select: 3, selectName: "UQcom" });
              }}
            >
              <Body>
                <Image
                  source={require("Mobacon/asset/img/logo/UQcom.png")}
                  resizeMode="contain"
                  style={Style.logo}
                />
              </Body>
            </CardItem>
            <CardItem
              button
              style={
                this.state.select == 4
                  ? Style.select
                  : { borderBottomWidth: 1, borderColor: "#F2F4F7" }
              }
              onPress={() => {
                this.setState({ select: 4, selectName: "docomo" });
              }}
            >
              <Body>
                <Image
                  source={require("Mobacon/asset/img/logo/docomo.png")}
                  resizeMode="contain"
                  style={Style.logo}
                />
              </Body>
            </CardItem>
            <CardItem
              button
              style={this.state.select == 5 ? Style.selectLast : {}}
              onPress={() => {
                this.setState({ select: 5, selectName: "rakuten" });
              }}
            >
              <Body>
                <Image
                  source={require("Mobacon/asset/img/logo/rakuten.png")}
                  resizeMode="contain"
                  style={Style.logo}
                />
              </Body>
            </CardItem>
          </Card>
        </Content>
        <View style={FooterStyle}>
          <Button
            title="LOGIN TO CARRIER"
            buttonStyle={FooterBtn}
            onPress={() => {
              store.dispatch({
                type: "CARRIER",
                payload: this.state.selectName
              });
              Actions.LoginCarrier();
            }}
            disabled={this.state.select == 0 ? true : false}
          />
        </View>
      </View>
    );
  }
}

const Style = StyleSheet.create({
  select: {
    borderWidth: 1,
    borderColor: "#76D5CE",
    borderBottomColor: "#76D5CE",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1
  },
  card: {
    borderRadius: 5
  },
  selectFirst: {
    borderWidth: 1,
    // borderTopEndRadius : 5,
    borderColor: "#76D5CE",
    borderBottomColor: "#76D5CE",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 10,
    shadowRadius: 2,
    elevation: 1
  },
  /*cardItem: {
    borderBottomColor: '#F2F4F7',
  },*/
  selectLast: {
    borderWidth: 1,
    // borderBottomEndRadius : 5,
    borderColor: "#76D5CE"
  },
  logo: {
    height: 80,
    width: 150,
    alignSelf: "center"
  }
});

const MapStateToProps = state => {
  return state;
};

export default connect(MapStateToProps)(Home);
