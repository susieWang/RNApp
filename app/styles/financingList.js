'use strict';
/**
 * @class FinancingList
 * 
 * */

import React from 'react';
import {
  StyleSheet,
  Dimensions,
} from 'react-native';

var cell_w = Dimensions.get('window').width;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'rgb(237, 237, 237)',
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
