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
