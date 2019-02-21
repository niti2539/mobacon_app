import React, { Component } from 'react';
import {
  Text,
  View,
  Platform
} from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { Wrap, FooterStyle, FooterBtn } from '../../asset/StyleSheet/CommonStyle'
import FormStyle from '../../asset/StyleSheet/FormStyle'
import {Actions} from 'react-native-router-flux'
import HeaderCustom from './Components/Header'
import { Content, Form, Item, Input, Label, Picker,Icon } from 'native-base';
import { Dropdown } from 'react-native-material-dropdown';

import * as RNIap from 'react-native-iap';

const itemSkus = Platform.select({
  ios: [
    'com.buzzfreeze.app.mobacon'
  ],
  android: [
    'com.buzzfreeze.app.mobacon'
  ]
});


class UpgradeToPro extends Component {
  constructor(props) {
      super(props);
      this.state = {
        selected2:undefined
      };
  }

  async componentDidMount() {
    try {
      const products = await RNIap.getProducts(itemSkus);
      this.setState({ products });
    } catch(err) {
      console.warn(err); // standardized err.code and err.message available
    }
  }

  componentWillUnmount() {
    RNIap.endConnection();
  }

  onBuyPurchase(){
    
    this.setState({ progressTitle: 'Please wait...' });
    RNIap.buyProduct( 'com.buzzfreeze.app.mobacon' ).then(purchase => {
        // this.setState({
        //   receipt: purchase.transactionReceipt, // save the receipt if you need it, whether locally, or to your server.
        //   progressTitle: 'Purchase Successful!',
        // });
        // Actions.chat()
      }).catch(err => {
        // resetting UI
        console.warn(err); // standardized err.code and err.message available
        alert(err.message);
      })
  }

  onValueChange2(value) {
    this.setState({
      selected2: value
    });
  }

  

  render() {

    const NumberFam = [{
      value: 0
    },{
      value: 1
    },{
      value: 2
    },{
      value: 3
    },{
      value: 4
    },{
      value: 5
    },{
      value: 6
    },{
      value: 7
    },{
      value: 8
    },{
      value: 9
    },{
      value: 10
    }]
    const provider = [{
      value: 'Softbank'
    },{
      value: 'Kddi'
    },{
      value: 'Uq'
    },{
      value: 'Docomo'
    },{
      value: 'R'
    }]
    return (
      <View style={Wrap}>
        <HeaderCustom title={this.props.title} backTo={()=>Actions.promotion()} back={true}/>
        
        
        <Content style={{paddingTop:30,paddingHorizontal:15}}>
          <Form>
            <Label style={{color:'#3B4859'}}>Number of family members {/*this.refs.familyMember.value()*/}</Label>
            <Item style={FormStyle.Item}>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="ios-arrow-down-outline" />}
                style={{ flex: 1 }}
                itemStyle={{backgroundColor:'#fff'}}
                placeholder="Please select ?"
                placeholderStyle={{ color: "#3B4859" }}
                placeholderIconColor="#3B4859"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
              {
                  NumberFam.map(item => {
                    return(
                      <Picker.Item label={item.value} value={item.value} />
                    )
                  })
                }
              </Picker>
              {/* <Dropdown
                ref='familyMember'
                label='Favorite Fruit'
                data={NumberFam} /> */}
            </Item>
            <Label style={{color:'#3B4859'}}>Internet provider {/*this.refs.provider.value()*/}</Label>
            <Item style={FormStyle.Item} >
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="ios-arrow-down-outline" />}
                style={{ flex: 1 }}
                itemStyle={{backgroundColor:'#fff'}}
                placeholder="Please select ?"
                placeholderStyle={{ color: "#3B4859" }}
                placeholderIconColor="#3B4859"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                {
                  provider.map(item => {
                    return(
                      <Picker.Item label={item.value} value={item.value} />
                    )
                  })
                }
              </Picker> 
            </Item>
            {/* <View>
              <Dropdown
                ref='provider'
                label='Favorite Fruit'
                data={provider} />
            </View> */}
            <Label style={{color:'#3B4859'}}>Your address</Label>
            <Item style={FormStyle.Item}>
              <Input />
            </Item>
          </Form>
        </Content>


        <View style={FooterStyle}>
          <Button title='UPGRADE TO PRO' buttonStyle={FooterBtn}
            onPress={()=> this.onBuyPurchase()} />
        </View>
      </View>

    );
  }
}

const MapStateToProps = state => {
  return state
}

export default connect(MapStateToProps)(UpgradeToPro);