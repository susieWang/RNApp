/*
    <HYtimeline
      direction="column"
      circleWidth={100}//决定球的容器的宽度
      circleHeight={30}//决定球的容器的高度
      circleSize={20}//决定球的大小，
      step={2}//步骤进行到第几步,注意步骤第一步从1开始，还没开始就写0
      doneCircleColor=""
      doneTextColor=""
      undoneCircleColor=""
      undoneTextColor=""
      data={[//数据，必须要填写
        {
          time:'2013-2-2',
          date:'今天',
          content:'步骤一'
        },
        {
          time:'2013-2-2',
          date:'今天',
          content:'步骤一'
        },
        {
          time:'2013-2-2',
          date:'今天',
          content:'步骤一'
        },
      ]}
*/

import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';


export default class timeline extends Component {

  static propTypes = {
    data: PropTypes.array.isRequired,
    circleHeight: PropTypes.number,
    circleWidth: PropTypes.number,
    circleSize: PropTypes.number,
    direction: PropTypes.string,
    step: PropTypes.number,
    doneCircleColor: PropTypes.string,
    doneTextColor: PropTypes.string,
    undoneCircleColor: PropTypes.string,
    undoneTextColor: PropTypes.string
  }

  static defaultProps = {
    data: [],
    circleSize: 15,
    circleHeight: 30,
    circleWidth:30,
    direction: 'row',
    step: 0,
    doneCircleColor: 'rgb(115,78,43)',
    doneTextColor: 'rgb(115,78,43)',
    undoneCircleColor: 'rgb(190,190,190)',
    undoneTextColor: 'rgb(190,190,190)'
  }
  constructor(props) {
    super(props);
    this.state = {
      step: this.props.step-1
    }
  }



  render() {
    const {
      direction,
      circleHeight,
      circleWidth,
      circleSize,
      doneCircleColor,
      doneTextColor,
      undoneCircleColor,
      undoneTextColor,
      data
    } = this.props;

    //初始化两个列表
    let circlelist = []
    let textlist = []

    //遍历数据
    for (let i in data) {
      
      let circleColor = undoneCircleColor;//完成之前的圆点颜色
      let textColor = undoneTextColor;//完成以前的文本颜色
      if (i <= this.state.step) {
        circleColor = doneCircleColor;//完成之后的圆点颜色
        textColor = doneTextColor;//完成之后的文本颜色
      }
      //横排和竖排的显示不同，去要区别渲染
      let lineStyle={
          top:'50%',
          right: (circleWidth + circleSize) / 2,
          width: circleWidth - circleSize,
          height: 1, 
      },
      viewStyle={
          width: circleWidth,
      },
      textStyle={
          time:{},
          date:{}
      }
      if(direction==='row'){
        lineStyle = {
          left: '50%',
          bottom: (circleHeight + circleSize) / 2,
          height: circleHeight - circleSize,
          width: 1, 
        },
        viewStyle={
          height: circleHeight,
        }
        textStyle={
          time:{width:70},
          date:{width:50} 
        }
      }

      if(i==0){//因为第一item是不需要竖线的，所以这里区别渲染。
        circlelist.push(
          <View key={i} style={{height: circleHeight, width: circleWidth, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ width: circleSize, height: circleSize, borderRadius: circleSize / 2, backgroundColor: circleColor }}></View>
          </View>)
      } else {
        circlelist.push(
          <View key={i} style={{ height: circleHeight, width: circleWidth, justifyContent: 'center', alignItems: 'center' }}>
            <View style={[{ backgroundColor: circleColor, position: 'absolute',},lineStyle]}></View>
            <View style={{ width: circleSize, height: circleSize, borderRadius: circleSize / 2, backgroundColor: circleColor }}></View>
          </View>)
      }//渲染圆形小球
      textlist.push(
        <View key={i} style={{flexDirection: direction }}>
          <View style={[{justifyContent:'center',alignItems:'center'},viewStyle]}><Text numberOfLines={1} selectable={true} style={[{ color: textColor},textStyle.time]} >{data[i].time}</Text></View>
          <View style={[{justifyContent:'center',alignItems:'center'},viewStyle]}><Text numberOfLines={1} selectable={true} style={[{ color: textColor},textStyle.date]} >{data[i].date}</Text></View>
          <View style={[{justifyContent:'center',alignItems:'center'},viewStyle]}><Text numberOfLines={1} selectable={true} style={[{ color: textColor}]} >{data[i].content}</Text></View>
        </View>
      )

    }
    console.log(direction)
    _direction = direction=='row'?'column':'row';
    return (
      <View style={{ flexDirection: direction }}>
        <View style={{flexDirection:_direction,overflow:'hidden' }}>
          {circlelist}
        </View>
        <View style={{borderColor:'red',flexDirection:_direction,overflow:'hidden'}}>
          {textlist}
        </View>
      </View>
    )
  }
}