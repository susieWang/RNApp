import React, { Component } from 'react'
import Button from '../component/HYButton'
import {
  Dimensions,
  View,
  Text
} from 'react-native';
import ModalPayPwd from './ModalPayPwd';
const width = Dimensions.get('window').width;


//style
import financingConfirmStyle from '../styles/financingConfirm'

const cachedResults = {
  isRendered: true
}

class FinancingConfirm extends Component {
  constructor(props){
    super(props);
    this.state = {
      payPwdObj : null
    }
  }


  _renderKeyContent(value, unit) {
    let content = [<Text key='1' style={financingConfirmStyle.keyContent}>{value}</Text>]
    if (unit) content.push(<Text key='2' style={financingConfirmStyle.contentUnit}>{unit}</Text>)
    return (<View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>{content}</View>)
  }

  _renderRowBetween(title, content) {
    return (
      <View style={financingConfirmStyle.rowBetween}>
        <Text>{title}</Text>
        <Text>{content}</Text>
      </View>
    )
  }
    _submitPwd = (text) => {
       console.log("run here");
        this.props.onPress();
    }
    _hidePwd = () => {
        this.setState({
            payPwdObj : null
        })
    }
    _showPwd = () => {
        var self = this;
        this.setState({
            payPwdObj :  <ModalPayPwd confirm={self._submitPwd} cancel = {self._hidePwd}></ModalPayPwd>
        })
    }
  render() {
    return (
      <View style={[financingConfirmStyle.container, this.props.style]}>
        <View style={financingConfirmStyle.rowItem}>
          <View style={financingConfirmStyle.cellItem}>
            <View style={{ flex: 5 }}>
              <Text style={financingConfirmStyle.contentTitle}>申请总额（元）</Text>
              {this._renderKeyContent(40000, '万')}
            </View>
            <View style={{ flex: 4 }}>
              <Text>2012-12-12 放款</Text>
            </View>
            <View style={{ flex: 4 }}>
              <Text>2012-12-12 还款</Text>
            </View>
          </View>
          <View style={financingConfirmStyle.cellItem}>
            <View style={{ flex: 3 }}>
              <Text style={financingConfirmStyle.contentTitle}>期限</Text>
              {this._renderKeyContent(365, '天')}
            </View>
            <View style={{ flex: 3 }}>
              <Text style={financingConfirmStyle.contentTitle}>成本率</Text>
              {this._renderKeyContent(9.98, '%')}
            </View>
            <View style={{ flex: 5 }}>
              <Text style={financingConfirmStyle.contentTitle}>费用（元）</Text>
              {this._renderKeyContent(123123123)}
            </View>
          </View>
        </View>
        <View style={financingConfirmStyle.rowItem}>
          {this._renderRowBetween('放款客户', '财富余额宝')}
          {this._renderRowBetween('提现账户', '平安银行(0004)')}
        </View>
        <View style={financingConfirmStyle.rowItem}>
          {this._renderRowBetween('转让产品', '平安财富家园82号集合资金信托')}
          {this._renderRowBetween('产品合同号', 'erdjsadioguoiadsfjpoias')}
          {this._renderRowBetween('转让份额', '250000份')}
        </View>
        <View style={financingConfirmStyle.submitBtn}>
          <Button
            text="确认并提交"
            borderColor="#fff"
            width={width * .9}
            onPress={this._showPwd}
            height={40}
            textColor="#fff"
            textSize={15}
          />
        </View>
          {this.state.payPwdObj}
      </View>
    )
  }
}

export default FinancingConfirm