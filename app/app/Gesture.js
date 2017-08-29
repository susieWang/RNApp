import React from 'react'
import {
  Button
} from 'react-native'
import PasswordGesture from 'react-native-gesture-password'
import { NavigationActions } from 'react-navigation'

var Password1 = ''
export default class Tab extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.message.nomal
  }

  message = {
    right: {
      status: 'right',
      message: '请输入密码'
    },
    wrong: {
      status: 'wrong',
      message: '密码错误，请重新输入'
    },
    nomal: {
      status: 'normal',
      message: '请输入密码'
    },
    again: {
      status: 'normal',
      message: '请再次输入密码'
    }
  }

  goToPage() {
    const { state } = this.props.navigation
    if (state.params) {
      const resetAction = NavigationActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: state.params.page })]
      })
      this.props.navigation.dispatch(resetAction)
    } else {
      this.props.navigation.goBack()
    }

  }

  onEnd(password) {
    if (password == '123') {
      this.setState(this.message.right)
      this.goToPage()
    } else {
      this.setState(this.message.wrong)
    }
  }
  onStart() {
    this.setState(this.message.nomal)
  }
  onReset() {
    this.setState(this.message.nomal)
  }
  getInitialState() {
    return this.message.nomal
  }
  onStart() {
    if (Password1 === '') {
      this.setState(this.message.nomal)
    } else {
      this.setState(this.message.again)
    }
  }
  render() {
    return (
      <PasswordGesture
        ref='pg'
        status={this.state.status}
        message={this.state.message}
        interval={1000}
        style={{ height: 20 }}
        onStart={this.onStart.bind(this)}
        onReset={this.onReset.bind(this)}
        onEnd={(password) => this.onEnd(password)}
      />
    )
  }
}