import React, { Component } from 'react'
import {
  View
} from 'react-native'
//style
import financingTabStyle from '../styles/financingTab'
import Navibar from "../component/HYHeader"
import List from "./FinancingList"
import Plan from "./FinancingPlan"
import Confirm from "./FinancingConfirm"
import Success from "./FinancingSuccess"
import MaskWraper from '../wraper/maskWraper'

class FinancingTab extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showIndex: 1
    }
  }



  _changeShow(showIndex) {
    this.setState({
      showIndex: showIndex
    })
  }

  _showTitle() {
    switch (this.state.showIndex) {
      case 1:
        return '选择融资产品'
      case 2:
        return '填写融资计划'
      case 3:
        return '确认融资信息'
      case 4:
        return '申请提交成功'
      default:
        return '选择融资产品'
    }
  }

  render() {

    let content = (
      <List
        navigation={this.props.navigation}
        onPress={this._changeShow.bind(this, 2)}
      />
    )
    switch (this.state.showIndex) {
      case 1:
        content = (
          <List
            navigation={this.props.navigation}
            onPress={this._changeShow.bind(this, 2)}
          />
        )
        break
      case 2:
        content = (
          <Plan
            navigation={this.props.navigation}
            onPress={this._changeShow.bind(this, 3)}
          />
        )
        break
      case 3:
        content = (
          <Confirm
            navigation={this.props.navigation}
            onPress={this._changeShow.bind(this, 4)}
          />
        )
        break
      case 4:
        content = (
          <Success
            navigation={this.props.navigation}
          />
        )
        break
    }

    return (
      <View style={financingTabStyle.container}>
        <Navibar
          title={this._showTitle()}
          leftBtn='back'
          navigation={this.props.navigation}
        />
        {content}
      </View>
    );
  }
}


export default MaskWraper(FinancingTab)
