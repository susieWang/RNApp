'use strict';
/**
 * @class FinancingSuccess
 * 
 * */

import React from 'react';
import {
  StyleSheet,
  PixelRatio,
  Dimensions,
} from 'react-native';
var cell_w = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: cell_w,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    backgroundColor: 'rgb(237, 237, 237)'
  },
  circle: {
    borderWidth: 5,
    margin: 30,
    height: 120,
    width: 120,
    borderRadius: 75,
    borderColor: 'green',
    alignItems: 'center',
    overflow: 'hidden'
  },
  strong: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  row: {
    margin: 10
  }
});

module.exports = styles;
