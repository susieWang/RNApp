'use strict';
/**
 * @class FinancingPlan
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
    width: cell_w,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'rgb(237, 237, 237)',
  },
  planItem: {
    marginBottom: 10,
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    height: 40,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  rowItem: {
    backgroundColor: '#fff',
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputContainer: {
    flexDirection: 'row', 
    position: 'absolute',
    width: cell_w,
    height: 40,
    paddingRight: 10,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  next: {
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: 'transparent'
  },
  rowColumn:{
    width: cell_w / 2
  }
})
module.exports = styles;
