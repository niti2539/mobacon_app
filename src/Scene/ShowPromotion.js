import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { Wrap, FooterStyle, FooterBtn } from '../../asset/StyleSheet/CommonStyle'
import HeaderCustom from './Components/Header'
import CardPromotion from './Components/CardPromotion'
import {Actions} from 'react-native-router-flux'

class ShowPromotion extends Component {
    render() {
      return (
        <View style={Wrap}>
          <HeaderCustom title={this.props.title} menu />
          <CardPromotion/>
          <View style={FooterStyle}>
            <Button title='UPGRADE TO PRO' buttonStyle={FooterBtn}
              onPress={()=>Actions.Upgrade()} />
          </View>
        </View>

      );
    }
  }

  const MapStateToProps = state => {
    return state
  }
  
  export default connect(MapStateToProps)(ShowPromotion);