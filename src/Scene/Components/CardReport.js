import React, { Component } from 'react';
import {  Content, Card, CardItem, Text, Body, Item } from 'native-base'
import { Button } from 'react-native-elements'
import { BarChart, Grid, YAxis, XAxis } from 'react-native-svg-charts'
import { LinearGradient, Stop, Defs } from 'react-native-svg'
import {View} from 'react-native'
import { Actions } from 'react-native-router-flux'

export default class CardReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
        minutesClick:true,
        smsClick:false,
        dataClick:false
    };
  }
  onChangeChart(m,s,d) {
    this.setState({
        minutesClick: m,
        smsClick: s,
        dataClick: d
    })
  }
  render() {

    const fill = 'rgb(134, 65, 244)'
    const data = [ 
        {
            name:'MAY',
            value:550,
            svg:{
                onPress: ()=> Actions.ReportHistoryDetail()
            }
        },
        {   
            name:'JUNE',
            value:390,
            svg:{
                onPress: ()=> Actions.ReportHistoryDetail()
            }
        } 
    ]
    const contentInset = { top: 10, bottom: 10 }
    const yMax = 600
    const yMin = 0
    const Gradient = () => (
        <Defs key={ 'gradient' }>
            <LinearGradient id={ 'gradient' } x1={ '0%' } y={ '0%' } x2={ '0%' } y2={ '100%' }>
                <Stop offset={ '0%' } stopColor={ '#76D5CE' }/>
                <Stop offset={ '100%' } stopColor={ '#5FB2AE' }/>
            </LinearGradient>
        </Defs>
    )
    return (
        <Content padder>
            <Card style={{borderRadius:5}}>
                <CardItem header bordered padder style={{backgroundColor:'#A0ACBC',flexWrap:'wrap',flexDirection:'column'}}>
                    <Text style={{alignSelf:'center',fontSize:19,textAlign:'center',color:'#fff'}}>REPORT HISTORY FOR{'\n'}</Text>
                    <Text style={{alignSelf:'center',fontSize:19,textAlign:'center',color:'#fff',marginBottom:10}}>LAST 2 MONTHS{'\n'}</Text>
                    <Body style={{alignSelf:'center',flexDirection:'row'}}>
                        <Button
                            title='MINUTES' 
                            fontSize={12}
                            borderRadius={16}
                            outline={!this.state.minutesClick}
                            backgroundColor="#76D5CE"
                            buttonStyle={{paddingHorizontal:18,paddingVertical:9}}
                            onPress={() => this.onChangeChart(true,false,false)} />
                        <Button
                            title='SMS' 
                            fontSize={12}
                            borderRadius={16}
                            outline={!this.state.smsClick}
                            backgroundColor="#76D5CE"
                            buttonStyle={{paddingHorizontal:32,paddingVertical:9}} 
                            onPress={() => this.onChangeChart(false,true,false)} />
                        <Button
                            title='DATA' 
                            fontSize={12}
                            borderRadius={16}
                            outline={!this.state.dataClick}
                            backgroundColor="#76D5CE"
                            buttonStyle={{paddingHorizontal:30,paddingVertical:9}}
                            onPress={() => this.onChangeChart(false,false,true)} />

                    </Body>
                </CardItem>
                <View style={{ height: 400, flexDirection: 'row', padding: 15 }}>

                   <YAxis
                        data={ data }
                        contentInset={ contentInset }
                        max={ yMax }
                        min={ yMin }
                    />
                    <BarChart
                        style={{ flex: 1}}
                        data={ data }
                        svg={{ fill }}
                        contentInset={ contentInset }
                        yAccessor={ ({ item }) => item.value }
                        xAccessor={ ({ item }) => item.name }
                        yMax={ yMax }
                        yMin={ yMin }
                        clamp={ true }
                        svg={{
                            fill: 'url(#gradient)',
                            width: 20
                        }}
                    >
                    <Gradient/>
                        <Grid/>
                    </BarChart>
                    <XAxis
                        style={{ marginHorizontal: -10 }}
                        data={ data }
                        formatLabel={ (item) => item.name }
                        contentInset={{ left: 10, right: 10 }}
                        svg={{ fontSize: 10, fill: 'black' }}
                    />
                </View>
            </Card>
        </Content>
    );
  }
}

