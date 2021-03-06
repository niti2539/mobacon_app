import React, { Component } from "react";
import { View, Text } from "react-native";
import CardDetail from "./Components/CardDetail";
import Header from "./Components/Header";
import {
  Wrap,
  FooterStyle,
  FooterBtn
} from "../../asset/StyleSheet/CommonStyle";
import { connect } from "react-redux";
import {
  GetLastReview,
  LikeDislikeReview
} from "../Controller/ReviewController";
import { Actions } from "react-native-router-flux";

class AnalyzeDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataShow: {
        header: ["OFFER NAME", "$", "/ month"],
        Item: [
          {
            title: "MINUTES",
            value: " / month"
          },
          {
            title: "SMS",
            value: " / month"
          },
          {
            title: "INTERNET TRAFFIC",
            value: " / month"
          }
        ],
        offer: {
          review: "",
          suggestion: "",
          liked: true
        }
      }
    };
  }

  async getReview() {
    return await GetLastReview();
  }

  async likeDislikeReview() {
    return await LikeDislikeReview(
      this.state.data.id,
      this.props.Global.AnalyzeReview.like
    );
  }

  componentDidMount() {
    this.getReview().then(data => {
      let dataShow = {};
      if (data.status == false) return false;
      data = data.data;
      dataShow = {
        header: ["OFFER NAME", data.offer.review || ''],
        Item: [
          {
            title: "suggestion",
            value: data.offer.suggestion ? data.offer.suggestion : '',
          },
        ],
        offer: data.offer
      };
      // console.log(data);
      // console.log(dataShow);
      this.setState({
        data: data,
        dataShow: dataShow, 
        offer: data.offer,
      });
    });
  }

  componentWillUnmount() {
    this.likeDislikeReview();
  }

  render() {
    return (
      <View style={Wrap}>
        <Header title={this.props.title} menu />
        <CardDetail footer={true} data={this.state.dataShow} offer = {this.state.offer} />
      </View>
    );
  }
}

const MapStateToProps = state => {
  return state;
};

export default connect(MapStateToProps)(AnalyzeDetail);
