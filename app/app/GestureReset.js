import React from 'react'
import {
  Button
} from 'react-native'
import PasswordGesture from 'react-native-gesture-password'
import { NavigationActions } from 'react-navigation'

export default class Tab extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.message.normal
  }
  oldPassword = '123'
  newPassword = ''
  step = 1

  message = {
    success: {
      status: 'right',
      message: '输入密码成功'
    },
    wrong: {
      status: 'wrong',
      message: '密码错误，请重新输入'
    },
    normal: {
      status: 'normal',
      message: '请输入原始密码'
    },
    new: {
      status: 'normal',
      message: '请输入新密码'
    },
    again: {
      status: 'normal',
      message: '请再次输入新密码'
    },
    different: {
      status: 'wrong',
      message: '两次密码输入不一致'
    },
    invalid: {
      status: 'wrong',
      message: '新密码长度小于4位'
    }
  }

  goToPage() {
    this.props.navigation.goBack()
  }

  _validateNewPassword(password) {
    if(password.length >= 4) {
      return true
    } else {
      this.setState(this.message.invalid)
      return false
    }
  }

  _checkOldPassword(password) {
    if (password == this.oldPassword) {
      this.setState(this.message.new)
      this.step = 2
    } else {
      this.setState(this.message.wrong)
    }
  }

  _resetNewPassword(password) {
    if (this._validateNewPassword(password)) {
      this.newPassword = password
      this.setState(this.message.again)
      this.step = 3
    }
  }

  _checkNewPassword(password) {
    if (password == this.newPassword) {
      this.setState(this.message.success)
      setTimeout(() => {
        this.goToPage()
      }, 1000)
    } else {
      this.setState(this.message.different)
    }
  }


  onEnd(password) {
    switch (this.step) {
      case 1:
        this._checkOldPassword(password)
        break
      case 2:
        this._resetNewPassword(password)
        break
      case 3:
        this._checkNewPassword(password)
        break
      default:
    }
  }

  onReset() {
    const message = this.message
    switch (this.step) {
      case 1:
        this.setState(message.normal)
        break
      case 2:
        this.setState(message.new)
        break
      case 3:
        this.setState(message.again)
        break
      default:
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
        onReset={this.onReset.bind(this)}
        onEnd={(password) => this.onEnd(password)}
      />
    )
  }
}