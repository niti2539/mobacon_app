import React, { Component } from 'react';
import {  Content, Card, CardItem, Text, Body } from 'native-base';

export default class CardPromotion extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <Content padder>
            <Card>
                <CardItem header bordered padder style={{backgroundColor:'#A0ACBC',flexWrap:'wrap',flexDirection:'column'}}>

                    <Text style={{alignSelf:'center',fontSize:16,textAlign:'center',color:'#fff'}}>THIS FEATURE IS ONLY{'\n'}AVAILABLE IN PRO MODE.</Text>
                    <Text style={{alignSelf:'center',fontSize:14,color:'#fff'}}>{'\n'}Please upgrade to pro and you will get:</Text>

                </CardItem>
                <CardItem bordered>
                    <Body style={{paddingVertical:20}}>
                        <Text style={{alignSelf:'center'}}>LIVE CHAT</Text>
                    </Body>
                </CardItem>
                <CardItem bordered>
                    <Body style={{paddingVertical:20}}>
                        <Text style={{alignSelf:'center'}}>FULL HISTORY</Text>
                    </Body>
                </CardItem>
                <CardItem bordered>
                    <Body style={{paddingVertical:20}}>
                        <Text style={{alignSelf:'center'}}>INDETAILED INVOICE</Text>
                    </Body>
                </CardItem>
                <CardItem bordered>
                    <Body style={{paddingVertical:20}}>
                        <Text style={{alignSelf:'center'}}>MORE OPTIONS</Text>
                    </Body>
                </CardItem>
            </Card>
        </Content>
    );
  }
}
