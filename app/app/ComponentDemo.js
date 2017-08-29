import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Button,
  TextInput,
  Dimensions
} from 'react-native';
import HYInput from '../component/HYInput';
import HYEject from '../component/HYEject';
import HYPayPassword from '../component/HYPayPassword';
import HYButton from '../component/HYButton';
import HYStar from '../component/HYStar';
import HYtimeline from '../component/HYtimeline';
import HYActionSheet from '../component/HYActionSheet';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import HYSwitch from '../component/HYSwitch';
// import HYHorizontal from '../component/HYHorizontal';


const deviceWidth = Dimensions.get('window').width;

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const CARD_REGEX=/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;

class ComponentDemo extends Component {

  constructor(props){
    super(props);
    this.state={
      dis:false,
      value:'HYActionSheet'
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <HYInput
          style={styles.inputLayout}
          checkValid={t => EMAIL_REGEX.test(t)}//使用正则表达式检查内容，正确返回true，错误返回false。
        >
          <TextInput
            style={styles.textInput}
            placeholder={'邮箱'}// placeholder是自定义属性，用于属性值传递给父组件。
            onFocus={()=>{console.log(1)}}
            onBlur={()=>{console.log(2)}}
            clearButtonMode={'while-editing'}
          />
        </HYInput>
        <HYPayPassword 
          maxLength={6} 
          style={{borderWidth:1,borderRadius:8,width:300,height:45}}
          onEnd={(text)=>{console.log("paypassword输入的值为"+text)}}
        >
        </HYPayPassword>
        <HYtimeline
          direction="column"
          circleWidth={100}//决定球的容器的宽度
          circleHeight={30}//决定球的容器的高度
          circleSize={20}//决定球的大小，
          step={2}//步骤进行到第几步,注意步骤第一步从1开始，还没开始就写0
          /*doneCircleColor=""
          doneTextColor=""
          undoneCircleColor=""
          undoneTextColor=""*/
          data={[//数据，必须要填写
            {
              time:'2013-2-2',
              date:'今天',
              content:'步骤一'
            },
            {
              time:'2013-2-2',
              date:'星期天',
              content:'步骤1231一'
            },
            {
              time:'2013-2-2',
              date:'今天',
              content:'步骤一'
            },
          ]}
        ></HYtimeline>
        <HYEject
          successfunc={()=>{console.log('确认')}}
          failfunc={()=>{console.log('取消')}}
          title='尼玛喊你回家吃饭'
          contentHeight={100}
          bottomtype='confirm'
          content={
            <View style={{justifyContent:'center',alignItems:'center'}}>
            <HYInput style={[styles.inputLayout,{width:200}]}>
              <TextInput
                  style={styles.textInput}
                  placeholder={'密码'}
                  secureTextEntry={true}
                  onChangeText={(text)=>{console.log("密码input输入的值为"+text)}}//注意这里的上下文环境。
                  clearButtonMode={'while-editing'}
              />
            </HYInput>
            <Text>HYEject</Text>
            </View>
          
          }
        >
        <Text>HYEject</Text>
        </HYEject>
        <HYActionSheet  data={['选项一','选项二','选项三']} onchange={(text)=>{this.setState({value:text})}}>
          <HYButton
            text={this.state.value}
          >
          </HYButton>
        </HYActionSheet>
        <HYButton 
          text="HYButton"
          disabled={this.state.dis}
          onPress={()=>{this.setState({dis:true})}}
        >
        </HYButton>
        <HYSwitch
          callback={(value)=>{console.log(value)}}
          size={30}
          defaultValue={true}
        ></HYSwitch>
        {/*<HYHorizontal
        showsHorizontalScrollIndicator={false}
          data={[1,2,3,4,5,6,7,8,9,10,11,13,12,14]}
          renderItem = {(key)=>{return (<View key={key} style={{marginLeft:5,marginRight:5,width:100,height:100,backgroundColor:'red'}}></View>)}}
        >
        </HYHorizontal>*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  textInput: {
    fontSize: 16,
    height: 40
  },
  inputLayout: {
    marginTop: 16,
    marginHorizontal:'auto',  
    width:deviceWidth* .8
  }
});
export default ComponentDemo







