import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { Wrap, FooterStyle, FooterBtn } from '../../asset/StyleSheet/CommonStyle'
import FormStyle from '../../asset/StyleSheet/FormStyle'
import {Actions} from 'react-native-router-flux'
import HeaderCustom from './Components/Header'
import { Content, Form, Item, Input, Label, Picker,Icon } from 'native-base';

class UpgradeToPro extends Component {
  constructor(props) {
      super(props);
      this.state = {
        selected2:undefined
      };
  }
  onValueChange2(value) {
    this.setState({
      selected2: value
    });
  }

  render() {
    return (
      <View style={Wrap}>
        <HeaderCustom title={this.props.title} backTo={()=>Actions.promotion()} back={true}/>
        
        
        <Content style={{paddingTop:30,paddingHorizontal:15}}>
          <Form>
            <Label style={{color:'#3B4859'}}>Number of family members</Label>
            <Item style={FormStyle.Item}>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="ios-arrow-down-outline" />}
                style={{ flex: 1 }}
                itemStyle={{backgroundColor:'#fff'}}
                placeholder="Please select"
                placeholderStyle={{ color: "#3B4859" }}
                placeholderIconColor="#3B4859"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="0" value="0" />
                <Picker.Item label="1" value="1" />
                <Picker.Item label="2" value="2" />
                <Picker.Item label="3" value="3" />
                <Picker.Item label="4" value="4" />
                <Picker.Item label="5" value="5" />
                <Picker.Item label="6" value="6" />
                <Picker.Item label="7" value="7" />
                <Picker.Item label="8" value="8" />
                <Picker.Item label="9" value="9" />
                <Picker.Item label="10" value="10" />
              </Picker>
            </Item>
            <Label style={{color:'#3B4859'}}>Internet provider</Label>
            <Item style={FormStyle.Item}>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="ios-arrow-down-outline" />}
                style={{ flex: 1 }}
                itemStyle={{backgroundColor:'#fff'}}
                placeholder="Please select"
                placeholderStyle={{ color: "#3B4859" }}
                placeholderIconColor="#3B4859"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="Softbank" value="Softbank" />
                <Picker.Item label="Kddi" value="Kddi" />
                <Picker.Item label="Uq" value="Uq" />
                <Picker.Item label="Docomo" value="Docomo" />
                <Picker.Item label="R" value="R" />
              </Picker>
            </Item>
            <Label style={{color:'#3B4859'}}>Your address</Label>
            <Item style={FormStyle.Item}>
              <Input />
            </Item>
          </Form>
        </Content>


        <View style={FooterStyle}>
          <Button title='UPGRADE TO PRO' buttonStyle={FooterBtn}
            onPress={()=>Actions.chat()} />
        </View>
      </View>

    );
  }
}

const MapStateToProps = state => {
  return state
}

export default connect(MapStateToProps)(UpgradeToPro);