'use strict';
/**
 * @class HYPicker
 * 
 * */

import React from 'react';
import {
  StyleSheet,
  Dimensions
} from 'react-native';
const width = Dimensions.get('window').width
const styles = StyleSheet.create({
  container: {
    height: 35,
    width: width,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalPopup: {
    width: width,
    opacity: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  popupStyle: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  optionOpacity: {
    width: width, 
    backgroundColor: '#fff',
    alignItems: 'center' 
  },
  optionText: {
    fontSize: 18,
    marginTop:10,
    marginBottom: 10
  },
  closeBtn: {
    backgroundColor: '#fff',
    marginTop: 10,
    height: 40,
    width: width,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
module.exports = styles;
