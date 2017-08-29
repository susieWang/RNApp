'use strict';
/**
 * @class financingItem
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
  cell: {
    padding: 10,
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#fcfcfc',
    marginBottom: 10
  },
  cellTitle: {
    borderBottomWidth: 1,
    borderBottomColor:"rgb(232, 232, 232)",
    height: 30
  },
  cellGeneral: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(232, 232, 232)',
    alignItems: 'center'
  },
  generalColumn: {
    width: cell_w / 3,
    alignSelf: 'flex-end'
  },
  maximumAmount: {
    color: 'red',
    fontSize: 20,
    height: 25
  },
  expDate: {
    height: 25,
    flexDirection:'row',
    alignItems:'flex-end'
  },
  expDateText: {
    fontWeight: 'bold'
  },
  listCell: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(232, 232, 232)',
    flexDirection: 'row',
    paddingTop: 5,
    paddingBottom: 5
  },
  noUnderLine: {
     borderBottomWidth: 0
  }

});
module.exports = styles;
