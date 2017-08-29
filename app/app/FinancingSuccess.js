import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import financingSuccessStyle from '../styles/financingSuccess'
import Button from '../component/HYButton'
import Timeline from '../component/HYtimeline'
import { NavigationActions } from 'react-navigation'

import {
  View,
  Text,
  TextInput,
  Dimensions
} from 'react-native';

const width = Dimensions.get('window').width
class Success extends Component {
  constructor(props) {
    super(props)
    this.state = {
      timelineData: [{
        date: '今日',
        time: "2013-2-2",
        content: '步骤一',
      },
      {
        date: '星期六',
        time: "2013-2-2",
        content: '步骤二',
      },
      {
        date: '星期二',
        time: "2013-2-2",
        content: '步骤三',
      }]
    }
  }

  _goToDetail() {
    const resetAction = NavigationActions.reset({
      index: 1,
      actions: [
        NavigationActions.navigate({ routeName: 'TabPage' }),
        NavigationActions.navigate({ routeName: 'OrderTab' })
      ]
    })
    this.props.navigation.dispatch(resetAction)

  }


  render() {
    return (
      <View
        style={[financingSuccessStyle.container, this.props.style]}
      >
        <View style={financingSuccessStyle.circle}>
          <Icon
            name={'ios-checkmark'} // 图标
            size={110}
            color={'green'} />
        </View>
        <View style={financingSuccessStyle.row}>
          <Text style={financingSuccessStyle.strong}>申请提交成功</Text>
        </View>
        <View style={financingSuccessStyle.row}>
          <Text>申请提交成功，请尽快完成客户资料审核。</Text>
        </View>
        <View style={financingSuccessStyle.row}>
          <Text>审核通过后将放款至您的财富宝余额。</Text>
        </View>

        <View style={financingSuccessStyle.row}>
          <Timeline
            data={this.state.timelineData}
            doneCircleColor='rgb(115,78,43)'
            doneTextColor='#000'
            step={2}
            undoneCircleColor='#ccc'
            undoneTextColor='#ccc'
          />
        </View>

        <View style={financingSuccessStyle.btn}>
          <Button
            text="查看订单详情"
            borderColor="#fff"
            width={width * .9}
            height={40}
            textColor="#fff"
            onPress={this._goToDetail.bind(this)}
            textSize={15}
          />
        </View>
      </View>
    )
  }
}


export default Success