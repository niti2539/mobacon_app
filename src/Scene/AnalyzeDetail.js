import React, { Component } from 'react';
import { View, Text } from 'react-native';
import CardDetail from './Components/CardDetail'
import Header from './Components/Header'
import { Wrap, FooterStyle, FooterBtn } from '../../asset/StyleSheet/CommonStyle'
import { connect } from 'react-redux';
import { GetLastReview } from '../Controller/ReviewController'

class AnalyzeDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataShow: {
        header:['OFFER NAME','$'  ,'/ month'],
        Item:[
            {
                title:'MINUTES',
                value:  ' / month'
            },
            {
                title:'SMS',
                value:  ' / month'
            },
            {
                title:'INTERNET TRAFFIC',
                value: ' / month'
            }
        ],
        offer: {
          review: '',
          suggestion: '',
          liked: true,
        }
      }
    };
  }
async componentDidMount(){
  let data = await GetLastReview();
  let dataShow = {};
  if(data.status == false){
    return false;
  } else {
    data = data.data.data;
    dataShow = {
      header:['OFFER NAME','$' + data.amount ,'/ month'],
      Item:[
          {
              title:'MINUTES',
              value: data.bill.used.minutes + ' / month'
          },
          {
              title:'SMS',
              value: data.bill.used.sms + ' / month'
          },
          {
              title:'INTERNET TRAFFIC',
              value: data.bill.used.internet + ' / month'
          }
      ],
      offer: {
        review: data.offer.review,
        suggestion: data.offer.suggestion,
        liked: data.offer.liked,
      }
    }
    this.setState({
      data: data,
      dataShow: dataShow
    })
  } 
}

  render() {
    
    return (
      <View style={Wrap}>
      
        <Header title={this.props.title} menu/>
        <CardDetail footer={true} data={this.state.dataShow}/>

      </View>
    );
  }
}


const MapStateToProps = state => {
  return state
}

export default connect(MapStateToProps)(AnalyzeDetail);