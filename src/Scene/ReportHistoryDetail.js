import React, { Component } from "react";
import { View, Text } from "react-native";
import { Card, CardItem } from "native-base";
import CardDetail from "./Components/CardDetail";
import HeaderCustom from "./Components/Header";
import {
  Wrap,
  FooterStyle,
  FooterBtn
} from "../../asset/StyleSheet/CommonStyle";
import { Actions } from "react-native-router-flux";

export default class ReportHistoryDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data
    };
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.data !== this.props.data) {
      const data = this.createData(this.props.data);
      this.setState({ data });
    }
  };

  render() {
    const { data } = this.state;
    return (
      <View>
        <Card
          style={{
            borderRadius: 20,
            overflow: "hidden"
            // backgroundColor: "transparent"
          }}
        >
          <CardItem
            padder
            header
            style={{
              paddingTop: 25,
              backgroundColor: "#A0ACBC",
              // flexWrap: "wrap",
              flexDirection: "column"
            }}
          >
            <Text
              style={{
                alignSelf: "center",
                fontSize: 16,
                fontWeight: "bold",
                textAlign: "center",
                color: "#fff",
                marginBottom: 14
              }}
            >
              {data.header[0]}
            </Text>
            <Text
              style={{
                alignSelf: "center",
                fontSize: 28,
                textAlign: "center",
                color: "#fff",
                marginBottom: 14
              }}
            >
              {data.header[1]}
            </Text>
          </CardItem>
          {data.item.map((item, index) => (
            <CardItem
              key={"item" + index + item.value}
              padder
              bordered
              style={{
                paddingTop: 25,
                backgroundColor: "#fff",
                // flexWrap: "wrap",
                flexDirection: "column"
              }}
            >
              <Text
                style={{
                  alignSelf: "center",
                  fontSize: 16,
                  fontWeight: "bold",
                  textAlign: "center",
                  color: "#7ad5ce",
                  marginBottom: 14
                }}
              >
                {String(item.title).toUpperCase()}
              </Text>
              <Text
                style={{
                  alignSelf: "center",
                  fontSize: 28,
                  textAlign: "center",
                  color: "#333",
                  marginBottom: 14
                }}
              >
                {Number(item.value)
                  ? Number(item.value).toLocaleString()
                  : item.value}
              </Text>
            </CardItem>
          ))}
        </Card>
      </View>
    );
  }
}
