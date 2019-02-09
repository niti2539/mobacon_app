import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button, colors } from 'react-native-elements';
import FormStyle from '../../asset/StyleSheet/FormStyle';
import { Wrap, FooterStyle, FooterBtn } from '../../asset/StyleSheet/CommonStyle';
import { connect } from 'react-redux';
import HeaderCustom from './Components/Header'
import ImagePicker from 'react-native-image-picker';
import {Avatar} from 'react-native-elements'
import { Content, Form, Item, Input, Label, Text, Picker,Icon } from 'native-base';
import { EditProfileAction , ChangePasswordAction } from '../Controller/AuthUserController';
import API_URL from '../ApiProvider'
 
// More info on all the options is below in the API Reference... just some common use cases shown here
const options = {
  title: 'Select Avatar',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

class Setting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatarSource: { uri: API_URL.Host + this.props.AuthUserReducer.info.imagePath } ,
      username: this.props.AuthUserReducer.info.fullName ,
      oldPassword: '' ,
      newPassword: '' ,
      confirmPassword: '' ,
      imageData: undefined
    };
  }

  ShowImagePicker(){
    ImagePicker.showImagePicker(options, (response) => {
        // console.log('Response = ', response);
       
        if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else {
          const source = { uri: response.uri };
       
          // You can also display the image using data:
          // const source = { uri: 'data:image/jpeg;base64,' + response.data };
       
          this.setState({
            avatarSource: source,
            imageData: {
              uri: response.uri ,
              type: response.type ,
              name: response.fileName
            }
          });
        }
      });
  }

  onSave(){
    const data = new FormData();
    data.append('fullName', this.state.username);
    if(this.state.imageData != undefined){
      data.append('image', this.state.imageData);
    }

    EditProfileAction(data);

    if(this.state.newPassword != '' && this.state.newPassword == this.state.confirmPassword){
      ChangePasswordAction(this.state.oldPassword , this.state.newPassword);
    }
  }

  render() {
    return (
      <View style={Wrap}>
          <HeaderCustom title={this.props.title} backTo={()=>Actions.home()} back />
          <Content>
            <View style={{padding:12}}>
              <Form>
                <View style={{alignItems: 'center',
                              marginTop: 10,
                              marginBottom: 10,
                            }}>
                  <Avatar
                    xlarge
                    rounded
                    onPress={() => this.ShowImagePicker()}
                    source={this.state.avatarSource}
                    activeOpacity={1}
                  />
                  <TouchableOpacity onPress={() => this.ShowImagePicker()} style={{marginTop:5}}>
                    <Text style={{...FormStyle.Label,...{color:'#00A4DB'}}}>CHANGE PICTURE</Text>
                  </TouchableOpacity>
                </View>
                <Label style={FormStyle.Label}>USERNAME</Label>
                <Item style={FormStyle.Item}>
                  <Input value={this.state.username} onChangeText={(text)=>this.setState({username:text})} />
                </Item>
                <Label style={FormStyle.Label}>OLD PASSWORD</Label>
                <Item style={FormStyle.Item}>
                  <Input value={this.state.oldPassword} onChangeText={(text)=>this.setState({oldPassword:text})} secureTextEntry />
                </Item>
                <Label style={FormStyle.Label}>NEW PASSWORD</Label>
                <Item style={FormStyle.Item}>
                  <Input value={this.state.newPassword} onChangeText={(text)=>this.setState({newPassword:text})} secureTextEntry/>
                </Item>
                <Label style={FormStyle.Label}>CONFIRM PASSWORD</Label>
                <Item style={FormStyle.Item}>
                  <Input value={this.state.confirmPassword} onChangeText={(text)=>this.setState({confirmPassword:text})} secureTextEntry/>
                </Item>
              </Form>
            </View>
          </Content>
          <View style={FooterStyle}>
            <Button title='SAVE' buttonStyle={FooterBtn}
              onPress={()=>this.onSave()} />
          </View>
      </View>
    );
  }
}


const MapStateToProps = state => {
    return state
  }
  
export default connect(MapStateToProps)(Setting);