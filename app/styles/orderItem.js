'use strict';
/**
 * @class orderItemStyle
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
    item: {
        width: cell_w,
        padding: 10,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#fcfcfc'
    },
    itemLeft: {
        flexDirection: 'column'
    }, 
    itemRight: {
    },
    alignRight: {
        textAlign: 'right'
    },
    tradeSuccess: {
        color: 'rgb(117, 203, 80)'
    },
    tradeFail: {
        color: 'rgb(151, 151, 151)'
    }

    
});
module.exports = styles;
