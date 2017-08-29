import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  NativeModules,
  StatusBar
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import NavigationBar from 'react-native-navbar'

import hyHeaderStyle from './styles/hyHeader';
import { connect } from 'react-redux'
import { performLoginAction } from '../actions/LoginAction'
import { showMaskAction, hideMaskAction } from '../actions/MaskAction'
var pushNative = NativeModules.PushNative;

class HYHeader extends Component {
  constructor(props) {
    super(props)
  }
  static propTypes = {
    title: PropTypes.string.isRequired,
    navigation: PropTypes.object,
  }

  _rightBtnOnPress() {
    //console.log(this.props.login.isLogin)
    if (this.props.rightBtnOnPress) {
      this.props.rightBtnOnPress();
    }
    // if(this.props.login.isLogin){
    //
    //   this.props.dispatch(showMaskAction())
    //     setTimeout(() => {
    //         this.props.dispatch(hideMaskAction())
    //         this.props.dispatch(performLoginAction())
    //     }, 1000)
    //
    //   // this.props._rightBtnOnPress();
    // }else{
    //     pushNative.RNInvokeOCLoginOrRegistWithCallBack((error, events)=>{
    //         if (error) {
    //             console.log(error);
    //         }else {
    //             console.log('登录获得的token'+ events);
    //         }
    //     });
    //
    //     // this.props.dispatch(showMaskAction())
    //     // setTimeout(() => {
    //     //     this.props.dispatch(hideMaskAction())
    //     //     this.props.dispatch(performLoginAction())
    //     // }, 1000)
    //
    // }
  }
  _leftButton() {
    switch (this.props.leftBtn) {
      case 'back':
        return (
          <Icon style={hyHeaderStyle.navBarLeft} name='angle-left' size={28}
            onPress={() => {
              this.props.navigation.goBack()
            }}
          />
        )
      case 'backUp':
        return (
          <Icon style={hyHeaderStyle.navBarLeft} name='angle-left' size={28}
            onPress={() => {
              this.props.navigation.goBack(null)
            }}
          />
        )
      default:
        break

    }
  }

  _rightButton() {
    let rightBtnText = "";
    if (this.props.rightBtnText) {
      rightBtnText = this.props.rightBtnText;
    }
    return (
      <Text
        onPress={this._rightBtnOnPress.bind(this)}
        style={hyHeaderStyle.navBarRight}
      >{rightBtnText}</Text>
    )
  }

  _title() {
    return (
      <View>
        <Text style={hyHeaderStyle.title}>{this.props.title}</Text>
      </View>
    )
  }

  render() {
    return (
      <View>
        <NavigationBar
          statusBar={{
            style: 'light-content',
            tintColor: 'rgb(62, 44, 26)'
          }}
          style={hyHeaderStyle.navbar}
          leftButton={this._leftButton()}
          rightButton={this._rightButton()}
          title={this._title()}
        />
      </View>
    )
  }
}

function mapStateToProps(state) {
  const { login, mask } = state;
  return {
    login,
    mask
  }
}

export default connect(mapStateToProps)(HYHeader)

