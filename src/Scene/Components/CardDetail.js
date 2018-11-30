import React, { Component } from 'react';
import {  Content, Card, CardItem, Text, Body, Item } from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign'

export default class CardDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    
    return (
        <Content padder>
            <Card style={{borderRadius:5}}>
                <CardItem header bordered padder style={{backgroundColor:'#A0ACBC',flexWrap:'wrap',flexDirection:'column'}}>
                    <Text style={{alignSelf:'center',fontSize:14,textAlign:'center',color:'#fff'}}>{this.props.data.header[0]+'\n'}</Text>
                    <Text style={{alignSelf:'center',fontSize:30,textAlign:'center',color:'#fff'}}>{this.props.data.header[1]+'\n'}</Text>
                    <Text style={{alignSelf:'center',fontSize:14,color:'#fff'}}>{this.props.data.header[2]}</Text>
                </CardItem>
                <CardItem bordered>
                    <Body style={{paddingVertical:8}}>
                        <Text style={{alignSelf:'center',color:'#76D5CE',fontSize:14}}>{this.props.data.Item[0].title + '\n'}</Text>
                        <Text style={{alignSelf:'center',fontSize:20}}>{this.props.data.Item[0].value}</Text>
                    </Body>
                </CardItem>
                <CardItem bordered>
                    <Body style={{paddingVertical:8}}>
                        <Text style={{alignSelf:'center',color:'#76D5CE',fontSize:14}}>{this.props.data.Item[1].title + '\n'}</Text>
                        <Text style={{alignSelf:'center',fontSize:20}}>{this.props.data.Item[1].value}</Text>
                    </Body>
                </CardItem>
                <CardItem bordered>
                    <Body style={{paddingVertical:8}}>
                        <Text style={{alignSelf:'center',color:'#76D5CE',fontSize:14}}>{this.props.data.Item[2].title + '\n'}</Text>
                        <Text style={{alignSelf:'center',fontSize:20}}>{this.props.data.Item[2].value}</Text>
                    </Body>
                </CardItem>
                <CardItem bordered>
                    <Body style={{paddingVertical:8}}>
                        <Text style={{alignSelf:'center',color:'#76D5CE',fontSize:14}}>E{this.props.data.Item[3].title + '\n'}</Text>
                        <Text style={{alignSelf:'center',fontSize:20}}>{this.props.data.Item[3].value}</Text>
                    </Body>
                </CardItem>

                <CardItem footer bordered style={{display:(this.props.footer ? 'flex' : 'none')}}>
                    <Body style={{justifyContent:'space-between',width:'50%'}}>
                        <Icon name='like2' size={50} style={{alignSelf: 'center'}} color="#76D5CE"/>
                        <Text style={{alignSelf: 'center',color:'#76D5CE' }} >I LIKE THIS OFFER</Text>
                    </Body>
                    <Body style={{justifyContent:'space-between',width:'50%'}}>
                        <Icon name='like2' size={50} style={{alignSelf:'center',transform: [{ rotate: '180deg'}]}} color="#E86D6D" />
                        <Text style={{alignSelf: 'center',color:'#E86D6D' }} >THE OFFER IS BAD</Text>
                    </Body>
                </CardItem>
            </Card>
        </Content>
    );
  }
}
