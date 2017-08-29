'use strict';
/**
 * @class Intro
 * 
 * */

import React from 'react';
import {
  StyleSheet,
  PixelRatio,
  Dimensions,
} from 'react-native';

//const { width } = Dimensions.get('window')
var cell_w = Dimensions.get('window').width;

const styles = StyleSheet.create({
      wrapper: {
      },

      slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent'
      },

      slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
      },

      slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
      },

      slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
      },

      text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
      },

      image: {
        width:cell_w,
        flex: 1
      }
});
module.exports = styles;
