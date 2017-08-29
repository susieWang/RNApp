import React,{Component} from 'react';
import {
  View,
  Text,
  Button,
  Dimensions
} from 'react-native';
import Navibar from "../component/HYHeader";
import HYButton from '../component/HYButton';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default class BankCardList extends Component{
  constructor(props){
    super(props)
    this.state = {

    }
  }


  render(){
    const {
      navigate,
      goBack
    } = this.props.navigation;
    return(
      <View>
        <Navibar title='添加银行卡' leftBtn='back' navigation={this.props.navigation}></Navibar>
        <HYButton
          text="下一步"
          borderColor="#fff"
          width={deviceWidth * .9}
          height={40}
          textColor="#fff"
          textSize={15}
          onPress={() => {alert('别着急，还没写')}}
        />
        
      </View>
    )
  }
}