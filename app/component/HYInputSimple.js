import React, { Component, PropTypes } from 'react'
import {
  TextInput
} from 'react-native'
import hyInputSimpleStyle from './styles/hyInputSimple'
import { regs } from '../util/config'

export default class InputSimple extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isValid: true
    }
  }

  static propTypes = {
    name: PropTypes.string.isRequired
  }

  _change(value) {
    this.props.change(value, this.props.name)

    if (!this.props.validation) return
    var result = true
    this.props.validation.forEach((item) => {
      if (!regs[item].test(value)) {
        result = false
        return false
      }
    })

    this.setState({
      isValid: result
    })

    this.props.validationCallback && this.props.validationCallback(result, this.props.name)
  }

  render() {
    var style = this.state
    return (
      <TextInput
        ref='input'
        underlineColorAndroid="transparent"
        textAlign='right'
        onChangeText={this._change.bind(this)}
        value={this.props.value}
        style={[hyInputSimpleStyle.defaultInput, this.state.isValid ? hyInputSimpleStyle.valid : hyInputSimpleStyle.invalid]}
      />
    )
  }
}