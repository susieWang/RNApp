import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Dimensions,
  Platform,
  TouchableWithoutFeedback
} from 'react-native';
import HYPayPassword from './HYPayPassword'
import Icon from 'react-native-vector-icons/FontAwesome'
const { height, width } = Dimensions.get('window')

export default class Password extends Component {

  constructor(props) {
    super(props)
  }


  _onClose() {
    this.props.onClose()
  }

  _onEnd(val) {
    this.props.onEnd(val)
  }

  render() {
    let marginBottom = 0
    if(Platform.OS != 'ios') {
      marginBottom = 70
    }
    let content = <View></View>
    if (this.props.isShow) {
      content = (
        <ScrollView 
        keyboardShouldPersistTaps='always'
        style={{position:'absolute', height: height, width: width, backgroundColor:'transparent'}}
      >
        <KeyboardAvoidingView
          behavior='position'
          style={{ flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0, 0, 0, 0.5)', height: height }}
        >
          <View
            style={{ backgroundColor: '#fff', flexDirection: 'row', height: 50, borderBottomWidth: 1, alignItems: 'center' }}
          >
            <TouchableWithoutFeedback
              style={{ zIndex: 10 }}
              onPress={this._onClose.bind(this)}
            >
              <Icon
                style={{ fontSize: 20, padding: 10 }}
                name="close"
                size={10}
              />
            </TouchableWithoutFeedback>

            <View style={{ alignItems: 'center', backgroundColor: 'transparent' }}>
              <Text style={{ color: '#000' }}>{this.props.title}</Text>
            </View>
          </View>
          <View style={{ padding: 15, backgroundColor: '#fff', width: width, alignItems: 'center',marginBottom: marginBottom }}>
            <Text style={{ paddingBottom: 15 }}>{this.props.content}</Text>
            <HYPayPassword
              ref='password'
              maxLength={6}
              autoFocus={true}
              style={{ borderWidth: 1, borderRadius: 8, width: 300, height: 45 }}
              onEnd={this._onEnd.bind(this)}
            />
          </View>
        </KeyboardAvoidingView>
        </ScrollView>
      )
    }


    return (
      <View
        style={{ position: 'absolute', width: width }}
      >
        {content}
      </View>
    )
  }
}