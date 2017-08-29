'use strict';
/**
 * @class hyList
 * 
 * */

import React from 'react';
import {
  StyleSheet,
  PixelRatio,
  Dimensions,
} from 'react-native';
const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fcfcfc',
  },
  loadingMore: {
    width: width,
    height: 30,
    alignItems: 'center'
  },
  loadingText: {
    height: 30,
    justifyContent: 'center'
  }
})
module.exports = styles;
