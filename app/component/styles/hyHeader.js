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
    navbar: {
        alignItems: 'center',
        borderColor: '#e1e1e1',
        width: cell_w,
        height: 44,
        backgroundColor: 'rgb(62, 44, 26)',
        top: 0

    },
    navBarLeft: {
        color: '#fff',
        width: cell_w*.1,
        marginLeft: 10
    },
    navBarRight: {
        color: '#fff',
        marginRight: 10
    },
    title: {
         color: '#fff', 
         fontSize: 20,
         alignItems: 'center'
    }
});

module.exports = styles;
