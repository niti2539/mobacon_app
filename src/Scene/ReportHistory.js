import React, { Component } from 'react'
import { View, Text } from 'react-native'
import CardReport from './Components/CardReport'
import HeaderCustom from './Components/Header'
import { Wrap, FooterStyle, FooterBtn } from '../../asset/StyleSheet/CommonStyle'
import { connect } from 'react-redux'
import {Actions} from 'react-native-router-flux'

import {GetHistory} from '../Controller/HistoryController'

const data = {
    "data": [
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

class ReportHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data:[{
            name:"null",
            value:0
        }]
    };
  }

 componentWillMount() {
    let id = this.props.AuthUserReducer.info.plan.id; 
    let planPro = (id == 2) ? true : false;
    if(!planPro) Actions.promotion();

    this.callGetHistory().then(()=>{
        let result = [];
        console.log(this.state.rawData.data);
        for(key in this.state.rawData.data){
            let obj = this.state.rawData.data[key];
            let dateParts = obj.emissionAt.split("-");
            let date = new Date(dateParts[0], dateParts[1] - 1, dateParts[2].substr(0,2));
            const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            let newObj = {
                name: monthNames[date.getMonth()],
                value: obj.amount
            }
            result.push(newObj);
            console.log(newObj);
        }
        console.log(result);
        this.setState({data:result});
    })
    console.log(this.state.data);
  }

  async callGetHistory(){
    let data = await GetHistory();
    this.setState({rawData:data});
  }


  render() {
    return (
      <View style={Wrap}>
        <HeaderCustom title={this.props.title} backTo={()=>Actions.home()} back={true} />
        <CardReport data={this.state.data}/>
      </View>
    );
  }
}

const MapStateToProps = state => {
  return state
}

export default connect(MapStateToProps)(ReportHistory);
