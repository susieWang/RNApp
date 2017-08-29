'use strict';
/**
 * @class HYTabBar
 * 
 * */

import React from 'react';
import {
  StyleSheet,
  PixelRatio,
  Dimensions,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff'
  },
  inputItem: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputItemBorderLeftWidth: {
    borderLeftWidth: 1,
    borderColor: '#ccc',
  },
  iconStyle: {
    width: 16,
    height: 16,
    backgroundColor: '#222',
    borderRadius: 8,
  },
});

module.exports = styles;
