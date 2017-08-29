'use strict';
/**
 * @class AccountInfo
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
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    userInfoChuck: {
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
        borderBottomWidth: 1,
        borderBottomColor: 'rgb(247,247,247)'
    },
    containerCell: {
        height: 50,
        justifyContent: 'center'
    },
    containerContent: {
        marginLeft: 10
    },
    cellTitle: {
        width: cell_w*.3
    },
    cellInfo: {
        width: cell_w*.6,
        alignItems: 'flex-end'
    },
    cellIcon: {
        width: cell_w*.1,
        alignItems: 'center'
    }
});
module.exports = styles;
