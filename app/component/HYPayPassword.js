/*
<HYPayPassword 
            maxLength={6} 
            style={{borderWidth:1,borderRadius:8,width:300,height:45}}
            onEnd={(text)=>{console.log("paypassword输入的值为"+text)}}
          >
</HYPayPassword>
*/
import React, { Component, PropTypes, } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableHighlight,
  InteractionManager,//可以将一些耗时较长的工作安排到所有互动或动画完成之后再进行。这样可以保证JavaScript动画的流畅运行。
} from 'react-native';

import hyPayPasswordStyle from './styles/hyPayPassword';

export default class HYPayPassword extends Component {
  static propTypes = {//默认属性
    style: View.propTypes.style,//在这里我尽可能的减少使用者需要给予的参数值
    maxLength: TextInput.propTypes.maxLength.isRequired,
    onChange: PropTypes.func,
    onEnd: PropTypes.func,
    autoFocus: PropTypes.bool,
  };

  static defaultProps = {
    maxLength: 6,
    autoFocus: false,
    onChange: () => { },
    onEnd: () => { },
  };
  //constructor函数会自动添加，在这里就不写了。
  state = {
    text: ''
  };



  render() {
    return (
      <TouchableHighlight
        onPress={this._onPress.bind(this)}
        activeOpacity={1}
        underlayColor='transparent'>
        <View style={[hyPayPasswordStyle.container, this.props.style]} >
          <TextInput
            style={{ height: this.props.style.height, zIndex: 99, position: 'absolute', width: this.props.style.width, opacity: 0 }}//这里的input框其实是不现实的，在这里input框z轴绝对前置。
            ref='textInput'
            maxLength={this.props.maxLength}//这个input的最大长度为
            autoFocus={this.props.autoFocus}//自动聚焦属性，在这个input组件渲染完成的时候，会在componentDidMount聚焦。
            keyboardType="numeric"
            onBlur={this.props.onBlur}
            onChangeText={
              (text) => {
                this.setState({ text });
                this.props.onChange(text);
                if (text.length === this.props.maxLength) {
                  this.props.onEnd(text);
                }
              }
            }
          />
          {
            this._getInputItem()
          }
        </View>
      </TouchableHighlight>
    )

  }
  
  _getInputItem() {
    let inputItem = [];
    let { text } = this.state;

    for (let i = 0; i < this.props.maxLength; i++) {
      if (i == 0) {
        inputItem.push(
          <View key={i} style={[hyPayPasswordStyle.inputItem, { width: this.props.style.width / this.props.maxLength, height: this.props.style.height }]}>
            {i < text.length ? <View style={[hyPayPasswordStyle.iconStyle]} /> : null}
          </View>)
      }
      else {
        inputItem.push(
          <View key={i} style={[hyPayPasswordStyle.inputItem, hyPayPasswordStyle.inputItemBorderLeftWidth, { width: this.props.style.width / this.props.maxLength, height: this.props.style.height }]}>
            {i < text.length ?
              <View style={[hyPayPasswordStyle.iconStyle]}>
              </View> : null}
          </View>)
      }
    }
    return inputItem;
  }

  _onPress() {
    this.refs.textInput.focus();
  }
}

