import React from 'react';
import {
  BackHandler,
  ToastAndroid,
  Platform
} from 'react-native'
import Page from './page'
import {
  StackNavigator
} from "react-navigation"
import TabPage from './app/TabPage'

import CardStackStyleInterpolator from 'react-navigation/src/views/CardStackStyleInterpolator';

import { Provider } from 'react-redux'
import configureStore from './store/configure-store'


const store = configureStore();


const App = StackNavigator({
  TabPage: { screen: TabPage },
  OrderTab: { screen: Page.OrderTab },
  Financing: { screen: Page.Financing },
  AccountInfo: { screen: Page.AccountInfo },
  OrderDetail: { screen: Page.OrderDetail },
  Gesture: { screen: Page.Gesture },
  FinancingTab: { screen: Page.FinancingTab },
  ModifyLoginPwd: { screen: Page.ModifyLoginPwd },
  ModifyPayPwd: { screen: Page.ModifyPayPwd },
  ApplyIndex: { screen: Page.ApplyIndex },
  OcrIndex: { screen: Page.OcrIndex },
  GestureReset: {screen: Page.GestureReset},
  ApplyResult : {screen : Page.ApplyResult},
  BankCard:{screen:Page.BankCard},
  Abouts:{screen:Page.Abouts},
  // QRIndex:{screen:Page.QRIndex}
}, {
    initialRouteName: 'TabPage',
    navigationOptions: {
      header: null
    },
    transitionConfig: () => ({
      screenInterpolator: CardStackStyleInterpolator.forHorizontal
    }),
    onTransitionStart: ()=>{ console.log('导航栏切换开始'); },  // 回调
    onTransitionEnd: ()=>{ console.log('导航栏切换结束'); }  // 回调
  }
)


class rootApp extends React.Component {

  onBackHandler = () => {
    if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
      return false
    }
    this.lastBackPressed = Date.now()
    // console.log(this.lastBackPressed )
    ToastAndroid.show('再按一次返回键退出', ToastAndroid.SHORT)
    return true
  };
  
  componentWillMount() {
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', this.onBackHandler)
    }
    
  }
  componentWillUnmount() {
    if (Platform.OS === 'android') {
      BackHandler.removeEventListener('hardwareBackPress', this.onBackHandler)
    }
  }
  // someEvent() {
  //   // call navigate for AppNavigator here:
  //   this.navigator && this.navigator.dispatch({ type: 'Navigate', routeName, params });
  // }
  render() {
    return (
      <Provider store={store}>
        <App  />
      </Provider>
    )
  }
}
export default rootApp


