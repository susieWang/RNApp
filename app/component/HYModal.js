import React, { Component } from 'react'
import {
  Modal
} from 'react-native'
export default class ModalTester extends Component {

  constructor(props) {
    super(props)
    this.state = {
      visible: this.props.visible
    }
  }

  render() {
    return (
      <Modal
        transparent={true}
        visible={this.props.visible}
        onRequestClose={() => this._hidePopup.bind(this)}
      >
        {this.props.children}
      </Modal>
    )
  }

}