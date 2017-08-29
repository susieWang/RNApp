import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  Dimensions,
  Animated,
  Easing,
  ActivityIndicator
} from 'react-native'
import { connect } from 'react-redux'
const { height, width } = Dimensions.get('window')

class HYMask extends Component {
  constructor(props) {
    super(props)
  }

  _renderView() {
    if (!this.props.mask.showMask) return <View></View>
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <ActivityIndicator size="large" color="#3e9ce9"/>
        </View>
      </View>
    )
  }

  render() {
    return this._renderView()
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    width: width,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute', 
    justifyContent: 'center',
    alignItems: 'center'
  },
  innerContainer: {
    backgroundColor: '#fcfcfc',
    opacity: .5,
    width: width*.5,
    height: 100,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

function mapStateToProps(state) {
  const { mask } = state
  return {
    mask
  }
}


export default connect(mapStateToProps)(HYMask)