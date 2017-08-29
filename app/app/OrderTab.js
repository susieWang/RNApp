import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';
import HYTabBar from '../component/HYTabBar';
import Navibar from "../component/HYHeader"
import OrderList from './OrderList'
import Mask from '../component/HYMask'
//style
import orderTabStyle from '../styles/orderTab';

import { connect } from 'react-redux'
import { hideMaskAction } from '../actions/MaskAction'

class OrderTab extends Component {

  constructor(props) {
    super(props)
    this.state = {
      tabNames: ['已受理', '待处理', '全部']
    };
  }

  componentDidMount() {
    this.props.dispatch(hideMaskAction())
  }
  render() {
    
    let tabNames = this.state.tabNames;
    let tabIconNames = this.state.tabIconNames;
    let keys = this.state.keys
    return (
      <View style={orderTabStyle.container}>
        <Navibar title='列表' leftBtn='back' navigation={this.props.navigation} />
        <ScrollableTabView
          renderTabBar={() => (
            <HYTabBar
              tabNames={tabNames}
              tabIconNames={tabIconNames}
              underline={true} />
          )}
          tabBarPosition='top'>
          <View style={orderTabStyle.content} tabLabel='已受理'>
            <OrderList navigation={this.props.navigation} orderStatus='accepted' tabLabel='已受理' />
          </View>
          <View style={orderTabStyle.content} tabLabel='待处理'>
            <OrderList navigation={this.props.navigation} orderStatus='notAccepted' tabLabel='待处理' />
          </View>
          <View style={orderTabStyle.content} tabLabel='全部'>
            <OrderList navigation={this.props.navigation} orderStatus='all' tabLabel='全部' />
          </View>
        </ScrollableTabView>
        <Mask />
      </View>
    );
  }
}

function mapStateToProps(state) {
  const { mask } = state;
  return {
    mask
  }
}
export default connect(mapStateToProps)(OrderTab)