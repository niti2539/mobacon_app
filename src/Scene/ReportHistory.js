import React, { Component } from "react";
import { View, Text } from "react-native";
import CardReport from "./Components/CardReport";
import HeaderCustom from "./Components/Header";
import {
  Wrap,
  FooterStyle,
  FooterBtn
} from "../../asset/StyleSheet/CommonStyle";
import { connect } from "react-redux";
import { Actions } from "react-native-router-flux";

import { GetHistory } from "../Controller/HistoryController";

const data = {
  data: [
    {
      used: {
        minutes: 992,
        sms: 455,
        internet: 470
      },
      amount: 2683.8,
      emissionAt: "2018-04-01T01:00:00.000Z",
      paidAt: "2018-04-05T10:00:00.000Z"
    }
  ]
};

class ReportHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount = async () => {
    let id = this.props.AuthUserReducer.info.plan.id;
    let planPro = id == 2 ? true : false;
    if (!planPro) Actions.promotion();

    const reportHistory = await this.callGetHistory();
    let result = [];
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    reportHistory.data.forEach(obj => {
      let date = new Date(obj.emissionAt);
      // console.log('date', date, date.getMonth());
      let newObj = {
        name: monthNames[date.getMonth()],
        value: obj.amount
      };
      result.push(newObj);
    });
    console.log('result', result);
    this.setState({ data: result });
  };

  async callGetHistory() {
    let data = await GetHistory();
    return data;
  }

  render() {
    const { data } = this.state;
    return (
      <View style={Wrap}>
        <HeaderCustom
          title={this.props.title}
          backTo={() => Actions.home()}
          back={true}
        />
        <CardReport data={data} />
      </View>
    );
  }
}

const MapStateToProps = state => {
  return state;
};

export default connect(MapStateToProps)(ReportHistory);
