'use strict';
/**
 * @class HYInputSimple
 * 
 * */

import React from 'react';
import {
  StyleSheet,
  Dimensions
} from 'react-native';
const width = Dimensions.get('window').width
const styles = StyleSheet.create({
  defaultInput: {
    backgroundColor: 'transparent',
    width: width
  },
  valid: {
    color: '#000'
  },
  invalid: {
    color: 'red'
  }
})

module.exports = styles
