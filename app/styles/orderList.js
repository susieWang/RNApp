'use strict';
/**
 * @class orderListStyle
 * 
 * */

import React from 'react';
import {
  StyleSheet,
  PixelRatio,
  Dimensions,
} from 'react-native';
const cell_w = Dimensions.get('window').width

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fcfcfc',
  },
  loadingMore: {
    width: cell_w,
    height: 30,
    alignItems: 'center'
  },
  loadingText: {
    height: 30,
    justifyContent: 'center'
  }
})
module.exports = styles;
