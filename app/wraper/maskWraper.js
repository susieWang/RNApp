import React, { Component } from 'react';
import Mask from '../component/HYMask'
import {
  View
} from 'react-native'

const maskWraper = WrappedComponent => {
  return class extends Component {
    render() {
      return (
        <View style={{flex: 1}}>
          <WrappedComponent {...this.props}/>
          <Mask />
        </View>
      )
    }
  }
}
export default maskWraper