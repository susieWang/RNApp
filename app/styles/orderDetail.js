'use strict';
/**
 * @class orderDetailStyle
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
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  containerChuck: {
    backgroundColor: 'rgb(241,241,241)',
    paddingBottom: 10
  },
  tradeContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    height: 50,
    width: cell_w,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(247,247,247)'
  },
  trade: {
    fontSize: 18
  },
  tradeSuccess: {
    color: 'rgb(253, 113, 33)'
  },
  tradeFail: {
    color: 'rgb(151, 151, 151)'
  },
  containerItem: {
    width: cell_w,
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(247,247,247)'
  },
  containerCell: {
    height: 40,
    justifyContent:'center'
  },
  containerContent: {
    marginLeft: 10,
    marginRight: 10
  }
});
module.exports = styles;
