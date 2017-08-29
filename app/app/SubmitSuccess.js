import React, {Component} from 'react';
import {
  View,
  Text
} from 'react-native';
import HYtimeline from '../component/HYtimeline;';
import HYHeader from '../component/HYHeader';


export class submitsuccess extends Component{
  constructor(props){
    super(props)
    this.state={}
  }

  render(){
    return (
      <View style={{flex:1}}>
        <HYHeader title='提交结束' navigation={this.props.navigation} />
        <View>

        </View>
      </View>
    )
  }
}