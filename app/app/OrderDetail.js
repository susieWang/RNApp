import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions
} from 'react-native';
import Navibar from "../component/HYHeader";
//style
import orderDetailStyle from '../styles/orderDetail';
import MaskWraper from '../wraper/maskWraper'

class Detail extends Component {
  renderItem(name, content) {
    return (
      <View style={orderDetailStyle.containerItem}>
        <View style={orderDetailStyle.containerCell}>
          <Text style={orderDetailStyle.containerContent}>{name}</Text>
        </View>
        <View style={orderDetailStyle.containerCell}>
          <Text style={orderDetailStyle.containerContent}>{content}</Text>
        </View>
      </View>
    )
  }

  render() {
    const row = this.props.navigation.state.params.row
    return (
      <View style={orderDetailStyle.container}>
        <Navibar title='订单详情' leftBtn='back' navigation={this.props.navigation} />
        <ScrollView>
          <View style={orderDetailStyle.containerChuck}>
            <View style={orderDetailStyle.tradeContainer}>
              <Text style={[orderDetailStyle.trade, row.trade ? orderDetailStyle.tradeSuccess : orderDetailStyle.tradeFail]}>{row.trade ? "交易成功" : "交易失败"}</Text>
            </View>
            {this.renderItem('产品名称', '123')}
            {this.renderItem('合同号', '234234234')}
            {this.renderItem('交易类型', '23423423')}
            {this.renderItem('交易金额', row.money + '元')}
            {this.renderItem('下单时间', row.time)}
          </View>
          <View style={orderDetailStyle.containerChuck}>
            {this.renderItem('产品期限', '2012-12-12')}
            {this.renderItem('预计起息日', '2012-12-12')}
            {this.renderItem('预计到期日', '2012-12-12')}
            {this.renderItem('预计年化收益率', '12%')}
            {this.renderItem('预计收益', '10000')}
            {this.renderItem('预计到账日', '2012-12-12')}
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default MaskWraper(Detail)