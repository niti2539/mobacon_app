import React, { Component } from "react";
import { Content, Card, CardItem, Text, Body, Item } from "native-base";
import { Button } from "react-native-elements";
import {
  BarChart,
  LineChart,
  Grid,
  YAxis,
  XAxis
} from "react-native-svg-charts";
import { LinearGradient, Stop, Defs, G } from "react-native-svg";
import { View, Dimensions, LayoutAnimation, UIManager } from "react-native";
import { Actions } from "react-native-router-flux";

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

export default class CardReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reportFor: "minutes",
      data: this.props.data || []
    };
  }

  onChangeChart(reportFor) {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    this.setState({
      reportFor
    });
  }

  componentWillReceiveProps = nextProps => {
    const { data } = this.props;
    const { data: nextData } = nextProps;
    if (data !== nextData) {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
      this.setState({ data: nextData });
    }
  };

  render() {
    const { reportFor, data } = this.state;
    const contentInset = { top: 20, bottom: 20 };
    const yMin = 0,
      yMax = 10000;
    const fill = "rgb(134, 65, 244)";

    const Gradient = () => (
      <G>
        <Defs key={"gradient"}>
          <LinearGradient
            id={"gradient"}
            x1={"0%"}
            y={"0%"}
            x2={"0%"}
            y2={"100%"}
          >
            <Stop offset={"0%"} stopColor={"#76D5CE"} />
            <Stop offset={"100%"} stopColor={"#5FB2AE"} />
          </LinearGradient>
        </Defs>{" "}
      </G>
    );
    return (
      <Content padder>
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
                fontSize: 19,
                textAlign: "center",
                color: "#fff",
                marginBottom: 14
              }}
            >
              REPORT HISTORY FOR{"\n"}LAST 2 MONTH
            </Text>
            {/* <Text style={{alignSelf:'center',fontSize:19,textAlign:'center',color:'#fff',marginBottom:10}}>LAST {this.props.data.length} MONTHS{'\n'}</Text> */}
            <Body
              style={{
                alignSelf: "center",
                flexDirection: "row",
                flexWrap: "wrap",
                marginLeft: -15,
                marginRight: -15
              }}
            >
              <Button
                title="MINUTES"
                fontSize={12}
                borderRadius={16}
                outline={reportFor !== "minutes"}
                backgroundColor="#76D5CE"
                buttonStyle={{
                  paddingHorizontal: 18,
                  paddingVertical: 9,
                  flex: 1
                }}
                onPress={() => this.onChangeChart("minutes")}
              />
              <Button
                title="SMS"
                fontSize={12}
                borderRadius={16}
                outline={reportFor !== "sms"}
                backgroundColor="#76D5CE"
                buttonStyle={{
                  paddingHorizontal: 32,
                  paddingVertical: 9,
                  flex: 1
                }}
                onPress={() => this.onChangeChart("sms")}
              />
              <Button
                title="DATA"
                fontSize={12}
                borderRadius={16}
                outline={reportFor !== "internet"}
                backgroundColor="#76D5CE"
                buttonStyle={{
                  paddingHorizontal: 30,
                  paddingVertical: 9,
                  flex: 1
                }}
                onPress={() => this.onChangeChart("internet")}
              />
            </Body>
          </CardItem>
          {/* <Text>{JSON.stringify(data)}</Text> */}

          {/* {data.length > 0 && (
            <CardItem
              header
              padder
              style={{ backgroundColor: "#fff", flexDirection: "column" }}
            >
              <View
                style={{
                  height: 400,
                  paddingVertical: 33,
                  flexDirection: "row",
                  alignItems: "flex-start"
                }}
              >
                <YAxis
                  data={data}
                  numberOfTicks={10}
                  svg={{
                    fill: "url(#gradient)"
                  }}
                  min={yMin}
                  max={yMax}
                  contentInset={contentInset}
                >
                  <Gradient />
                </YAxis>
                <View style={{ flex: 1 }}>
                  <BarChart
                    style={{ width: "100%", height: "100%" }}
                    data={data}
                    yAccessor={({ item }) => item.value[reportFor]}
                    xAccessor={({ item }) => item.name}
                    clamp={true}
                    contentInset={contentInset}
                    svg={{ fill: "url(#gradient)", width: 50 }}
                  >
                    <Gradient />
                    <Grid />
                  </BarChart>
                </View>
              </View>
            </CardItem>
          )} */}
        </Card>
        {data.length > 0 && (
          <View
            style={{
              height: 400,
              // padding: 33,
              flexDirection: "row"
              // alignItems: "flex-start"
            }}
          >
            <YAxis
              data={data}
              // numberOfTicks={10}
              svg={{
                fill: "url(#gradient)"
              }}
              min={yMin}
              max={yMax}
              contentInset={contentInset}
            >
              <Gradient />
            </YAxis>
            <BarChart
							style={{flex: 1, marginLeft: 4}}
              data={data}
              yAccessor={({ item }) => item.value[reportFor]}
              xAccessor={({ item }) => item.name}
              clamp={true}
              contentInset={contentInset}
              svg={{ fill: "url(#gradient)", width: 20 }}
            >
              <Gradient />
              <Grid />
            </BarChart>
          </View>
        )}
      </Content>
    );
  }
}
