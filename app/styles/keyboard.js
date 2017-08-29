'use strict';
/**
 * @class Keyboard
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
    justifyContent: 'center',
    backgroundColor: '#F5FCFF'
  },
  textInput: {
    height: 40,
    width: 200,
    backgroundColor: 'aqua',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
module.exports = styles;
