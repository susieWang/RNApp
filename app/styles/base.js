
'use strict';
/**
 *base style
 * 共用样式，组件的也可以定义到这里
 * */

import React from 'react';
import {
    StyleSheet,
    PixelRatio,
    Dimensions,
} from 'react-native';
const cell_w = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    containerRow:{
        flex: 1,
        flexDirection:'row',
        width:'100%'
    },
    calendar: {
        width:'100%',
        position:'absolute',
        bottom:0,
        right:0,
        zIndex:999,
        borderTopWidth: 1,
        paddingTop: 5,
        borderBottomWidth: 1,
        borderColor: '#eee',
        height: 350
    },
    textInput: {
        fontSize: 16,
        height: 40
    },
    inputLayout: {
        marginTop: 16,
        marginHorizontal:'auto',
        width:cell_w* .8
    },
    otpBlock:{
        position:"relative"
    },
    otpDesc :{
        position:'absolute',
        bottom:15,
        right:0,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    otpBtnAble:{
        color:"#1b5da9"
    },
    otpBtnDisable:{
        color:"#999"
    }
})
module.exports = styles;