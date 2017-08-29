'use strict';
/**
 * @class Financing
 * 
 * */

import React from 'react';
import {
  StyleSheet,
  PixelRatio,
  Dimensions,
} from 'react-native';

var cell_w = Dimensions.get('window').width;
var cell_h = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(243, 243, 243)',
        alignItems: 'center',
        height:cell_h
    },
    pieZone: {
        backgroundColor: 'rgb(62, 44, 26)',
        alignItems: 'center',
        justifyContent: 'center',
        height: 300,
        width: cell_w
    },
    loginBtn: {
        backgroundColor: '#000'
    },
    limitZone: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    videoBtn: {
        alignItems: 'center'
    },
    tabIcon: {
        width: '100%'
    },
    pieInfo: {
        position: 'absolute',
        width: 200,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    present: {
        backgroundColor: 'transparent',
        color: '#fff',
        fontSize: 60,
    },
    info: {
        color: 'rgb(194, 168, 125)',
        fontSize: 13
    },
    pieBtn: {
        color: 'rgb(194, 168, 125)',
        fontSize: 13
    },
    item: {
        width: cell_w,
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: 'rgb(247,247,247)'
    },
    cell: {
        height: 40,
        justifyContent: 'center'
    },
    content: {
        marginLeft: 10,
        marginRight: 10
    },
    icon: {
        textAlign: 'center'
    }
});
module.exports = styles;
