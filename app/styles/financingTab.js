'use strict';
/**
 * @class FinancingTab
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
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  hide: {
    position: 'absolute',
    left: -999
  }
});

module.exports = styles;
