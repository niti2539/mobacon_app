import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native'
import { Content, Card, CardItem, Text, Body, Item, Textarea, Form, Label } from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';
import FormStyle from '../../../asset/StyleSheet/FormStyle';
import { store } from '../../Store/index'


export default class CardDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
        Review: this.props.data.offer.review,
        suggestion: this.props.data.offer.suggestion,
        like: this.props.data.offer.liked
    };
  }

  async onReviewChange(text){
    await this.setState({Review :text})
    store.dispatch({type:'AnalyzeReview_Review',payload:this.state.Review});
  }

  async onSuggestionChange(text){
    await this.setState({suggestion :text})
    store.dispatch({type:'AnalyzeReview_Suggestion',payload:this.state.suggestion});

  }

  async onLikeToggle(){
    await this.setState({like:!this.state.like});
    store.dispatch({type:'AnalyzeReview_Like',payload:this.state.like});

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
                
                {
                    this.props.data.Item.map(item => {
                        return(
                            <CardItem bordered key={item.title}>
                                <Body style={{paddingVertical:8}}>
                                    <Text style={{alignSelf:'center',color:'#76D5CE',fontSize:14}}>{item.title + '\n'}</Text>
                                    <Text style={{alignSelf:'center',fontSize:20}}>{item.value}</Text>
                                </Body>
                            </CardItem>
                        )
                    })
                }
                
                {/* <CardItem bordered style={{display:(this.props.footer ? 'flex' : 'none')}}>
                    <Form>
                        <Label style={FormStyle.Label}>Review</Label>
                        <Item style={{...FormStyle.Item,...{elevation: 0,shadowOpacity: 0,shadowColor: '#fff'}}}>
                            <Textarea rowSpan={3} style={{width:'100%'}} bordered value={this.state.Review } onChangeText={text => this.onReviewChange(text)} />
                        </Item>
                        <Label style={FormStyle.Label}>Suggestion </Label>
                        <Item style={{...FormStyle.Item,...{elevation: 0,shadowOpacity: 0,shadowColor: '#fff'}}}>
                            <Textarea rowSpan={3} style={{width:'100%'}} bordered value={this.state.suggestion  } onChangeText={text => this.onSuggestionChange(text)} />
                        </Item>
                    </Form>
                </CardItem> */}

                <CardItem footer bordered style={{display:(this.props.footer ? 'flex' : 'none')}}>
                    <TouchableOpacity onPress={()=>this.onLikeToggle()} style={{justifyContent:'space-between',width:'50%',backgroundColor:(this.state.like) ? '#76D5CE' : '#fff'}}>
                        <Icon name='like2' size={50} style={{alignSelf: 'center'}} color={(this.state.like) ? '#fff' : '#76D5CE'}/>
                        <Text style={{alignSelf: 'center',color: (this.state.like) ? '#fff' : '#76D5CE' }} >I LIKE THIS OFFER</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.onLikeToggle()} style={{justifyContent:'space-between',width:'50%',backgroundColor:(!this.state.like) ? '#E86D6D' : '#fff'}}>
                        <Icon name='like2' size={50} style={{alignSelf:'center',transform: [{ rotate: '180deg'}]}} color={(!this.state.like) ? '#fff' : '#E86D6D'} />
                        <Text style={{alignSelf: 'center',color:(!this.state.like) ? '#fff' : '#E86D6D' }} >THE OFFER IS BAD</Text>
                    </TouchableOpacity>
                </CardItem>
            </Card>
            
        </Content>
    );
  }
}
