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

const cell_w = Dimensions.get('window').width;

const styles = StyleSheet.create({
  tabs: {
    flexDirection: 'row',
    height: 40,
    borderBottomWidth: 1,
    borderColor: 'rgb(147,147,147)'
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  tabItem: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  tabUnderlineStyle: {
    position: 'absolute',
    width: cell_w / 3,
    height: 1,
    backgroundColor: 'rgb(208,162,57)',
    bottom: -1,
  },
  noUnderLineStyle: {
    position: 'absolute',
    width: cell_w ,
    height: 1,
    backgroundColor: 'rgb(62,44,26)',
    bottom: -1,
  }
});
module.exports = styles;
