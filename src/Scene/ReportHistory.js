import React, { Component } from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { DialogComponent } from "react-native-dialog-component";
import CardReport from "./Components/CardReport";
import HeaderCustom from "./Components/Header";
import _ from "lodash";
import moment from "moment";
import {
  Wrap,
  FooterStyle,
  FooterBtn
} from "../../asset/StyleSheet/CommonStyle";
import ReportHistoryDetail from "./ReportHistoryDetail";
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
      data: [],
      detailData: null
    };
  }

  onClickSVG = async data => {
    console.log("data", data.emissionAt);
    await this.setState({ detailData: this.createDetailData(data) });
    if (!("show" in this.dialog)) return;
    this.dialog.show();
    // this.props.navigation.navigate()
    // Actions.ReportHistoryDetail({ data });
    // Actions.drawerMenu({ data });
  };

  createDetailData = rawData => {
    console.log("raw data", rawData);
    const { minutes, sms, internet } = rawData.value;
    const { emissionAt } = rawData;
    const date = moment(emissionAt);
    const startMonth = date.startOf("month").format("DD MMM");
    const endMonth = date.endOf("month").format("DD MMM");
    const data = {
      header: ["PERIOD ANALYZED", `${startMonth} - ${endMonth}`, ""]
    };
    data.item = [
      {
        title: "MINUTES USED",
        value: minutes
      },
      {
        title: "SMS SENT",
        value: sms
      },
      {
        title: "INTERNET TRAFFIC USED",
        value: `${(Number(internet) / 1000).toFixed(2)} GB`
      }
    ];
    console.log("reformat data", data);
    return data;
  };

  clearDetailData = () => {
    this.setState({ detailData: null });
  };

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
    reportHistory.data = _.orderBy(
      reportHistory.data,
      ["emissionAt"],
      "desc"
    ).slice(0, 2);
    reportHistory.data.forEach(obj => {
      let date = moment(obj.emissionAt);
      // const value = 5100;
      // const min = 3000;
      // console.log('date', date, date.getMonth());
      let getData = (month = 0) => ({
        // name: monthNames[month - 1],
        // // value: {obj.used}
        // value: {
        //   minutes: Math.floor(Math.random() * (value - min)) + min,
        //   sms: Math.floor(Math.random() * (value - min)) + min,
        //   internet: Math.floor(Math.random() * (value - min)) + min
        // },
        // emissionAt: moment(date).month(month-1)
        name: monthNames[date.month()],
        value: obj.used,
        emissionAt: date
      });
      let newObj = {
        info: getData(),
        svg: {
          onPress: () => {
            this.onClickSVG(getData());
          }
        }
      };

      // let newObj = month => ({
      //   info: getData(month),
      //   svg: {
      //     onPress: () => {
      //       this.onClickSVG(getData(month));
      //     }
      //   }
      // });
      result.push(newObj);

      // result.push(newObj(1));
      // result.push(newObj(2));
      // result.push(newObj(3));
      // result.push(newObj(4));
      // result.push(newObj(5));
      // result.push(newObj);
      // result.push(newObj);
    });
    // console.log("result", result);
    this.setState({ data: result });
  };

  async callGetHistory() {
    let data = await GetHistory();
    return data;
  }

  render() {
    const { data, detailData } = this.state;
    return (
      <View style={Wrap}>
        <DialogComponent
          ref={r => {
            this.dialog = r;
          }}
          onDismissed={this.clearDetailData}
          dialogStyle={styles.dialogStyle}
        >
          <SafeAreaView>
            <View>
              {detailData && <ReportHistoryDetail data={detailData} />}
            </View>
          </SafeAreaView>
        </DialogComponent>
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

const styles = StyleSheet.create({
  dialogStyle: {
    width: "90%",
    maxWidth: 500,
    borderRadius: 10,
    backgroundColor: "transparent"
  }
});

const MapStateToProps = state => {
  return state;
};

export default connect(MapStateToProps)(ReportHistory);
