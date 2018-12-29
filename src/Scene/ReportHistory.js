import React, { Component } from 'react'
import { View, Text } from 'react-native'
import CardReport from './Components/CardReport'
import HeaderCustom from './Components/Header'
import { Wrap, FooterStyle, FooterBtn } from '../../asset/StyleSheet/CommonStyle'
import { connect } from 'react-redux'
import {Actions} from 'react-native-router-flux'

class ReportHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentWillMount() {
    let id = this.props.AuthUserReducer.info.plan.id; 
    let planPro = (id == 2) ? true : false;
    if(!planPro) Actions.promotion();
  }

  render() {
    const data = {
      "data": [
          {
              "used": {
                  "minutes": 690,
                  "sms": 865,
                  "internet": 970
              },
              "amount": 3535,
              "emissionAt": "2018-01-01T01:00:00.000Z",
              "paidAt": "2018-01-05T10:00:00.000Z"
          },
          {
              "used": {
                  "minutes": 656,
                  "sms": 730,
                  "internet": 470
              },
              "amount": 2598.4,
              "emissionAt": "2018-02-01T01:00:00.000Z",
              "paidAt": "2018-02-05T10:00:00.000Z"
          },
          {
              "used": {
                  "minutes": 390,
                  "sms": 500,
                  "internet": 910
              },
              "amount": 2520,
              "emissionAt": "2018-03-01T01:00:00.000Z",
              "paidAt": "2018-03-05T10:00:00.000Z"
          },
          {
              "used": {
                  "minutes": 792,
                  "sms": 490,
                  "internet": 700
              },
              "amount": 2774.8,
              "emissionAt": "2018-04-01T01:00:00.000Z",
              "paidAt": "2018-04-05T10:00:00.000Z"
          },
          {
              "used": {
                  "minutes": 240,
                  "sms": 630,
                  "internet": 520
              },
              "amount": 1946,
              "emissionAt": "2018-05-01T01:00:00.000Z",
              "paidAt": "2018-05-05T10:00:00.000Z"
          },
          {
              "used": {
                  "minutes": 418,
                  "sms": 625,
                  "internet": 690
              },
              "amount": 2426.2,
              "emissionAt": "2018-06-01T01:00:00.000Z",
              "paidAt": "2018-06-05T10:00:00.000Z"
          },
          {
              "used": {
                  "minutes": 778,
                  "sms": 930,
                  "internet": 740
              },
              "amount": 3427.2,
              "emissionAt": "2018-07-01T01:00:00.000Z",
              "paidAt": "2018-07-05T10:00:00.000Z"
          },
          {
              "used": {
                  "minutes": 758,
                  "sms": 455,
                  "internet": 790
              },
              "amount": 2804.2,
              "emissionAt": "2018-08-01T01:00:00.000Z",
              "paidAt": "2018-08-05T10:00:00.000Z"
          },
          {
              "used": {
                  "minutes": 854,
                  "sms": 580,
                  "internet": 900
              },
              "amount": 3267.6,
              "emissionAt": "2018-09-01T01:00:00.000Z",
              "paidAt": "2018-09-05T10:00:00.000Z"
          },
          {
              "used": {
                  "minutes": 852,
                  "sms": 725,
                  "internet": 990
              },
              "amount": 3593.8,
              "emissionAt": "2018-10-01T01:00:00.000Z",
              "paidAt": "2018-10-05T10:00:00.000Z"
          },
          {
              "used": {
                  "minutes": 944,
                  "sms": 475,
                  "internet": 620
              },
              "amount": 2854.6,
              "emissionAt": "2018-11-01T01:00:00.000Z",
              "paidAt": "2018-11-05T10:00:00.000Z"
          },
          {
              "used": {
                  "minutes": 858,
                  "sms": 785,
                  "internet": 910
              },
              "amount": 3574.2,
              "emissionAt": "2018-12-01T01:00:00.000Z",
              "paidAt": "2018-12-05T10:00:00.000Z"
          }
      ]
  }
    
    return (
      <View style={Wrap}>
        <HeaderCustom title={this.props.title} backTo={()=>Actions.home()} back={true} />
        <CardReport/>
      </View>
    );
  }
}

const MapStateToProps = state => {
  return state
}

export default connect(MapStateToProps)(ReportHistory);
