import React, { Component } from "react";
import { Actions } from "react-native-router-flux";
import { StyleSheet, SafeAreaView } from "react-native";
import { Container, Content, List, ListItem, Text, Icon } from "native-base";
import { store } from "../../Store/index";
import { Wrap, FooterStyle } from "../../../asset/StyleSheet/CommonStyle";
import { LogoutAction } from "../../Controller/AuthUserController";

function MenuIcon({ name, style, ...rest }) {
  return (
    <Icon
      type="FontAwesome5"
      name={name}
      {...rest}
      style={{ color: "#fff", fontSize: 18, marginRight: 10, ...style }}
    />
  );
}
export default class DrawerMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    console.log("this.props", this.props);
  };

  render() {
    return (
      <Container
        style={{
          ...Wrap,
          ...{
            backgroundColor: "#3B4859",
            flexDirection: "column",
            flex: 1,
            justifyContent: "space-between"
          }
        }}
      >
        <Content>
          {/* <Image
                    source={{uri: "https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/react-navigation/img/drawer-cover.png"}}
                    style={{
                    height: 120,
                    alignSelf: "stretch",
                    justifyContent: "center",
                    alignItems: "center"}}>
                    <Image
                        square
                        style={{ height: 80, width: 70 }}
                        source={{
                            uri: "https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/react-navigation/img/logo.png"
                        }}/>
                </Image> */}
          <Text
            style={{
              height: 120,
              textAlign: "center",
              color: "#76D5CE",
              fontSize: 15,
              textAlignVertical: "center",
              backgroundColor: "#FFFFFF"
            }}
          >
            APP NAME OR LOGO
          </Text>
          <List style={{ paddingTop: 10 }}>
            <ListItem
              style={style.ListItem}
              button
              onPress={() => Actions.home()}
            >
              <MenuIcon name="home" />
              <Text style={style.text}>HOME</Text>
            </ListItem>
            <ListItem
              style={style.ListItem}
              button
              onPress={() => Actions.Analyze()}
            >
              <MenuIcon name="tachometer-alt" />
              <Text style={style.text}>ANALYZE MY BILL</Text>
            </ListItem>
            <ListItem
              style={style.ListItem}
              button
              onPress={() => Actions.chat()}
            >
              <MenuIcon name="comments" />
              <Text style={style.text}>LIVE CHAT </Text>
              <Text style={style.textHighlight}>(PRO)</Text>
            </ListItem>
            <ListItem
              style={style.ListItem}
              button
              onPress={() => Actions.ReportHistory()}
            >
              <MenuIcon name="chart-bar" />
              <Text style={style.text}>REPORT HISTORY </Text>
              <Text style={style.textHighlight}>(PRO)</Text>
            </ListItem>
            {/* <ListItem
                        style={style.ListItem}
                        button
                        onPress={() => Actions.ReportHistory()}>
                        <Text style={style.text}>PLAN SELECTION</Text>
                    </ListItem> */}
            <ListItem
              style={style.ListItem}
              button
              onPress={() => Actions.Setting()}
            >
              <MenuIcon name="server" />
              <Text style={style.text}>SETTINGS</Text>
            </ListItem>
          </List>
        </Content>
        <SafeAreaView style={{ justifyContent: "flex-end", flex: 1 }}>
          <List>
            <ListItem
              noBorder
              icon={<MenuIcon name="sign-out-alt" />}
              style={{ borderTopColor: "#fff", borderTopWidth: 0.2 }}
              button
              onPress={() => {
                LogoutAction().then(() => Actions.login());
              }}
            >
              <MenuIcon name="sign-out-alt" />
              <Text style={style.text}>LOGOUT</Text>
            </ListItem>
          </List>
        </SafeAreaView>
      </Container>
    );
  }
}

const style = StyleSheet.create({
  text: {
    fontSize: 14,
    color: "#fff"
  },
  textHighlight: {
    fontSize: 14,
    color: "#76D5CE"
  },
  ListItem: {
    borderBottomWidth: 0
  }
});
