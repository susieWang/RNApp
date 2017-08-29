import React, { Component, PropTypes } from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  Animated
} from 'react-native'
import Modal from './HYModal'
import pickerStyle from './styles/hyPicker'
class HYPicker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      changeValue: new Animated.Value(0),
      value: this.props.value,
      isShow: false
    }
  }

  static defaultProps = {
    btnType: 'alert'
  };

  static propTypes = {
    name: PropTypes.string.isRequired
  }

  _showPopup() {
    this.setState({ isShow: true });
    Animated.timing(
      this.state.changeValue,
      {
        toValue: 1,
        duration: 200
      }
    ).start();
  }

  _hidePopup() {
    Animated.timing(
      this.state.changeValue,
      {
        toValue: 0,
        duration: 200
      }
    ).start(() => {
      this.setState({ isShow: false })
    })
  }


  _pickerChange(value) {
    this.props.pickerChange(value, this.props.name)
    this._hidePopup()
  }

  _renderOptions() {
    let result = []
    this.props.data.forEach((item, index) => {
      result.push(

        <TouchableOpacity
          key={index}
          style={pickerStyle.optionOpacity}
          activeOpacity={0.5}
          onPress={() => { this._pickerChange(item) }}>
          <Text style={pickerStyle.optionText}>
            {item.display}
          </Text>
          <View style={{width:'96%',height:1,backgroundColor:'#eee'}}></View>
        </TouchableOpacity>

      )
    })
    return result
  }

  _renderBtn() {
    switch (this.props.btnType) {
      case 'alert':
        return (
          <TouchableOpacity
            style={pickerStyle.closeBtn}
            onPress={this._hidePopup.bind(this)}
          >
            <Text style={{fontSize: 18}}>关闭</Text>
          </TouchableOpacity>
        )
      default:
        return <View></View>
    }
  }

  render() {

    let changeValue = this.state.changeValue.interpolate({
      inputRange: [0, 1],
      outputRange: [-(this.props.data.length * 50 + 5), 0],
    });
    return (
      <View>
        <TouchableOpacity
          style={[pickerStyle.container, this.props.style]}
          onPress={this._showPopup.bind(this)}
        >
          <Text style={this.props.contextColor || {}}>{this.props.value ? this.props.value.display : '请选择'}</Text>
        </TouchableOpacity>
        <Modal
          visible={this.state.isShow}
        >
          <TouchableOpacity
            activeOpacity={1}
            style={pickerStyle.modalContainer}
            onPress={this._hidePopup.bind(this)}
          >
            <Animated.View style={[pickerStyle.modalPopup, {
              position: 'absolute',
              bottom: changeValue,
              opacity: this.state.changeValue
            }]}>
              <View style={pickerStyle.popupStyle}>
                {this._renderOptions()}
              </View>
              {this._renderBtn()}
            </Animated.View>
          </TouchableOpacity>
        </Modal>
      </View>
    )
  }
}


export default HYPicker