import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import Page from '../page'
import {
  Button,
  StyleSheet,
  BackHandler,
  ToastAndroid,
  View,
  Animated,
  Easing,
  AsyncStorage
} from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import HYTabBar from '../component/HYTabBar'
import Intro from './Intro'
import MaskWraper from '../wraper/maskWraper'

//style
import tabPageStyle from '../styles/tabPage'
class Tab extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tabNames: ['融资', '我的'],
      tabIconNames: ['money', 'user-o']
    }
  }


  _renderTab() {

    let tabNames = this.state.tabNames
    let tabIconNames = this.state.tabIconNames
    let keys = this.state.keys
    return (
      <View style={{ flex: 1 }}>
        <ScrollableTabView
          locked={true}
          renderTabBar={() => (
            <HYTabBar
              tabNames={tabNames}
              fontSize={10}
              iconSize={20}
              backgroundColor='rgb(62, 44, 26)'
              tabIconNames={tabIconNames} />
          )}
          onChangeTab={(obj) => {
            console.log('index:' + obj.i);
          }}
          scrollWithoutAnimation={true}
          tabBarPosition='bottom'>
          <View style={tabPageStyle.content} tabLabel='financing'>
            {/*<Page.IndexTab navigation={this.props.navigation} />*/}
            <Page.Financing navigation = {this.props.navigation}/>
          </View>
          <View style={tabPageStyle.content} tabLabel='mine'>
            <Page.MinePage navigation={this.props.navigation} />
          </View>
        </ScrollableTabView>
      </View>
    )
  }

  render() {
    return this._renderTab()
  }
}

export default MaskWraper(Tab)