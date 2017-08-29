import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
//style
import financingItemStyle from '../styles/financingItem';
import Mbutton from '../component/HYButton'

class Item extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      row: this.props.row
    }
  }

  render() {
    const row = this.state.row
    const list = []
    row.list.forEach((item, index) => {
      list.push(
        <View key={item.id} style={[financingItemStyle.listCell, (row.list.length == index + 1) ? financingItemStyle.noUnderLine : '']}>
          <View style={financingItemStyle.generalColumn}>
            <Text>额度(元)</Text>
            <Text>{row.maximumAmount}万</Text>
          </View>
          <View style={financingItemStyle.generalColumn}>
            <Text>有效期</Text>
            <View>
              <Text>{row.expDate}</Text>
            </View>
          </View>
        </View>
      )
    })
    return (
      <View style={financingItemStyle.cell}>
        <View style={financingItemStyle.cellTitle}>
          <Text>{row.title}</Text>
        </View>
        <View style={financingItemStyle.cellGeneral}>
          <View style={financingItemStyle.generalColumn}>
            <Text>最高金额(元)</Text>
            <Text style={financingItemStyle.maximumAmount}>{row.maximumAmount}万</Text>
          </View>
          <View style={financingItemStyle.generalColumn}>
            <Text>有效期</Text>
            <View style={financingItemStyle.expDate}>
              <Text style={financingItemStyle.expDateText}>{row.expDate}</Text>
            </View>
          </View>
          <View style={financingItemStyle.generalColumn}>
            <Mbutton
              text="立即申请"
              borderColor="rgb(62, 44, 26)"
              borderRadius={3}
              width={80}
              height={30}
              backgroundColor="transparent"
              textColor="rgb(62, 44, 26)"
              textSize={14}
              onPress={this.props.onPress}
            />
          </View>
        </View>
        <View style={financingItemStyle.cellItem}>
          {list}
        </View>
      </View>
    )
  }
}


export default Item