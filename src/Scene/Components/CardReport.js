import React, { Component } from "react";
import { Content, Card, CardItem, Text, Body, Button } from "native-base";
import { BarChart, Grid, YAxis, XAxis } from "react-native-svg-charts";
import {
  LinearGradient,
  Stop,
  Defs,
  G,
  Text as TextSvg,
  TSpan
} from "react-native-svg";
import {
  View,
  Dimensions,
  LayoutAnimation,
  UIManager,
  StyleSheet
} from "react-native";
import { Actions } from "react-native-router-flux";
import _ from "lodash";

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

  async onChangeChart(reportFor) {
    // LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    await this.setState({
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

  yMin = 0;
  yMax = 5000;

  render() {
    const { reportFor, data } = this.state;
    const { yMax, yMin } = this;
    const contentInset = { top: 20, bottom: 20 };
    const Labels = ({ x, y, bandwidth, data }) => {
      const CUT_OFF = yMax;
      // console.log("Cut off", CUT_OFF);
      return data.map((value, index) => {
        const val = value.info.value[reportFor];
        const key = "TextSvg" + index + "" + value;
        return (
          <G key={key + index}>
            <TextSvg
              x={x(index) + bandwidth / 2}
              y={val < CUT_OFF ? y(val) - 10 : y(val) + 15}
              fontSize={14}
              stroke="white"
              strokeWidth={0.2}
              fill={val >= CUT_OFF ? "white" : "#acacac"}
              alignmentBaseline={"middle"}
              textAnchor={"middle"}
            >
              <TSpan>{val}</TSpan>
            </TextSvg>
            <TextSvg
              x={x(index) + bandwidth / 2}
              y={val < CUT_OFF ? y(val) + 15 : y(val) + 35}
              fontSize={16}
              fill="#fff"
              alignmentBaseline={"middle"}
              textAnchor={"middle"}
            >
              <TSpan>{value.info.name}</TSpan>
            </TextSvg>
          </G>
        );
      });
    };
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
        </Defs>
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
                flex: 1,
                flexDirection: "row",
                marginLeft: -10,
                marginRight: -10
              }}
            >
              <Button
                color="#76D5CE"
                style={[
                  styles.button,
                  reportFor === "minutes"
                    ? { backgroundColor: "#76d5ce" }
                    : {
                        backgroundColor: "transparent",
                        borderColor: "#76d5ce",
                        borderWidth: 1,
                        borderStyle: "solid"
                      }
                ]}
                onPress={() => this.onChangeChart("minutes")}
              >
                <Text style={styles.buttonText}>minutes</Text>
              </Button>
              <Button
                color="#76D5CE"
                style={[
                  styles.button,
                  reportFor === "sms"
                    ? { backgroundColor: "#76d5ce" }
                    : {
                        backgroundColor: "transparent",
                        borderColor: "#76d5ce",
                        borderWidth: 1,
                        borderStyle: "solid"
                      }
                ]}
                onPress={() => this.onChangeChart("sms")}
              >
                <Text style={styles.buttonText}>sms</Text>
              </Button>
              <Button
                color="#76D5CE"
                style={[
                  styles.button,
                  reportFor === "internet"
                    ? { backgroundColor: "#76d5ce" }
                    : {
                        backgroundColor: "transparent",
                        borderColor: "#76d5ce",
                        borderWidth: 1,
                        borderStyle: "solid"
                      }
                ]}
                onPress={() => this.onChangeChart("internet")}
              >
                <Text style={styles.buttonText}>data</Text>
              </Button>
            </Body>
          </CardItem>
          {/* <Text>{JSON.stringify(data)}</Text> */}

          {data.length > 0 && (
            <CardItem
              header
              padder
              style={{ backgroundColor: "#fff", flexDirection: "column" }}
            >
              <View
                style={{
                  height: 400,
                  paddingVertical: 15,
                  flexDirection: "row"
                  // alignItems: "flex-start"
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
                <View style={{ flex: 1, marginLeft: 4 }}>
                  <BarChart
                    style={{ width: "100%", height: "100%" }}
                    data={data}
                    yAccessor={({ item }) => item.info.value[reportFor]}
                    xAccessor={({ item }) => item.info.name}
                    yMax={yMax}
                    yMin={yMin}
                    contentInset={contentInset}
                    svg={{
                      fill: "url(#gradient)"
                    }}
                  >
                    <Gradient />
                    <Grid />
                    <Labels />
                  </BarChart>
                </View>
              </View>
            </CardItem>
          )}
        </Card>
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 100
  },
  buttonText: {
    fontSize: 12,
    flex: 1,
    textAlign: "center"
  }
});
