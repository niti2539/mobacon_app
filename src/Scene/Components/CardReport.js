import React, { Component } from "react";
import { Content, Card, CardItem, Text, Body, Item } from "native-base";
import { Button } from "react-native-elements";
import { BarChart, Grid, YAxis, XAxis } from "react-native-svg-charts";
import { LinearGradient, Stop, Defs, G } from "react-native-svg";
import { View, Dimensions } from "react-native";
import { Actions } from "react-native-router-flux";

export default class CardReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reportFor: "minutes",
      data: this.props.data || []
    };
  }

  onChangeChart(reportFor) {
    this.setState({
      reportFor
    });
  }

  componentWillReceiveProps = nextProps => {
    const { data } = this.props;
    const { data: nextData } = nextProps;
    if (data !== nextData) {
      this.setState({ data: nextData });
    }
  };

  render() {
    const { reportFor, data } = this.state;
    const chartConfig = {
      backgroundGradientFrom: "#76D5CE",
      backgroundGradientTo: "#5FB2AE",
      color: (opacity = 1) => `rgb(30,30,30, ${opacity})`,
      strokeWidth: 2 // optional, default 3
		};
		const yMin = 0, yMax = 100000;
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
        <Card style={{ borderRadius: 5 }}>
          <CardItem
            header
            bordered
            padder
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
								marginBottom: 14,
              }}
            >
              REPORT HISTORY FOR{"\n"}LAST 2 MONTH
            </Text>
            {/* <Text style={{alignSelf:'center',fontSize:19,textAlign:'center',color:'#fff',marginBottom:10}}>LAST {this.props.data.length} MONTHS{'\n'}</Text> */}
            <Body style={{ alignSelf: "center", flexDirection: "row", flexWrap: 'wrap', marginLeft: -15, marginRight: -15 }}>
              <Button
                title="MINUTES"
                fontSize={12}
                borderRadius={16}
                outline={reportFor !== "minutes"}
                backgroundColor="#76D5CE"
                buttonStyle={{ paddingHorizontal: 18, paddingVertical: 9, flex: 1 }}
                onPress={() => this.onChangeChart("minutes")}
              />
              <Button
                title="SMS"
                fontSize={12}
                borderRadius={16}
                outline={reportFor !== "sms"}
                backgroundColor="#76D5CE"
                buttonStyle={{ paddingHorizontal: 32, paddingVertical: 9, flex: 1 }}
                onPress={() => this.onChangeChart("sms")}
              />
              <Button
                title="DATA"
                fontSize={12}
                borderRadius={16}
                outline={reportFor !== "internet"}
                backgroundColor="#76D5CE"
                buttonStyle={{ paddingHorizontal: 30, paddingVertical: 9, flex: 1 }}
                onPress={() => this.onChangeChart("internet")}
              />
            </Body>
          </CardItem>
        </Card>
        <Text>{JSON.stringify(data.length > 0? data[0].value[reportFor] : 'null')}</Text>
        <View style={{ height: 400, flexGrow: 1 }}>
          {/* <YAxis data={data} min={yMin} max={yMax} svg={fill} /> */}
        </View>
      </Content>
    );
  }
}
