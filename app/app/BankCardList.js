import React,{Component} from 'react';
import {
  View,
  Text,
  Button,
  Dimensions,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import Navibar from "../component/HYHeader";
import HYButton from '../component/HYButton';
import HYList from '../component/HYList';
import request from '../util/request'

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

class Item extends Component {
  constructor(props){
    super(props);
    this.state = {
        choose:this.props.item.choose
    }

  }
  componentWillReceiveProps(nextprops){
    this.setState({choose:nextprops.item.choose})
  }

  render(){
    console.log(this.state.choose)
    let bgcolor={backgroundColor:'rgb(237,237,237)'}
    if(this.state.choose ==true){
      bgcolor={backgroundColor:'red'}
    }
    return(
    <TouchableOpacity onPress={this.props.onpress} style={[{flex:1,flexDirection:'row',marginTop:20,borderRadius:5,width:deviceWidth*.9,padding:10},bgcolor]}>
      <View style={{flex:3}}>
        <Text numberOfLines={1} style={{marginBottom:5}}>{this.props.item.bankname}</Text>
        <Text numberOfLines={1} style={{marginBottom:5}}>{this.props.item.cardnumber}</Text>
        <Text numberOfLines={1} >单笔限额：{this.props.item.money}元</Text>
      </View>
      <View style={{flex:1,borderWidth:1}}>
      </View>
    </TouchableOpacity>
    )
  }
}

export default class BankCardList extends Component{
  constructor(props){
    super(props)
    this.state = {
      data:[]
    }
  }

  componentWillMount(){
    let url="https://www.easy-mock.com/mock/5954b37f9adc231f356d7924/test/list";
    request.get(url)
    .then(Data => {
      console.log(Data)
      this.setState({
          data:Data.data.projects
        })
    }).catch(error => {
      console.warn(error);
    })
  }

  chooseItem(id){
    let Data = this.state.data
    Data=Data.map((item)=>{
      item.choose=false;
      if(item.id==id) item.choose=true;
      return item
    })
    this.setState({data:Data})
  }
    
  _renderContent(){
    let data = this.state.data;
    return data.map((item)=>{return(<Item key = {item.key} item={item} onpress={this.chooseItem.bind(this,item.id)}></Item>)})
  }

  render(){
    const {
      navigate
    } = this.props.navigation;
    return(
      <View style={{alignItems:'center',backgroundColor:'#fff',flex:1}}>
        <Navibar title='绑定银行卡' leftBtn='backUp' navigation={this.props.navigation}></Navibar>
        <View style={{flex:3,alignItems:'center'}}>
          <ScrollView
          showsVerticalScrollIndicator={false}
          >
            {this._renderContent()}
          </ScrollView>
        </View>
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>

        <HYButton
          text="添加银行卡"
          borderColor="#fff"
          width={deviceWidth * .9}
          height={40}
          textColor="#fff"
          textSize={15}
          onPress={() => {navigate('AddBankCrad')}}
        />
       
        </View>

      </View>
    )
  }
}