'use strict';
/**
 * 申请面签流程样式
 * */

import React from 'react';
import {
    StyleSheet,
    PixelRatio,
    Dimensions,
} from 'react-native';
const cell_w = Dimensions.get('window').width;
const cell_h = Dimensions.get('window').height;
const styles = StyleSheet.create({
    container:{
        backgroundColor:"#fff"
    },
    tipsList:{
        width:"100%",
        backgroundColor:"#d5eff3",
        paddingLeft:15
    },
    tipsText :{
        lineHeight : 28,
        fontSize : 14
    },
    tipsIcon:{
        color:"#f3c06b",
        right:10
    },
    stepsHeaderBg:{
        width:"100%",
        height:150,
        backgroundColor:rgb(62, 44, 26),
        alignItems: 'center'
    },
    stepsHeaderIcon:{
        width:"40%",
        height:150
    },
    stepsIntro:{
        paddingTop:60,
        alignItems: 'center'
    },
    stepsHeader:{
    },
    stepsIcons:{
        display:"flex",
        flexDirection:"row",
        width: 350,
        marginTop:20
    },
    stepsIcon :{
        flex:1,
        width:50,
        height:50,
        borderRadius:25,
        borderWidth:1,
        borderColor:"#f3841b",
        borderStyle:"solid",
        alignItems: 'center',
        justifyContent: 'center'
    },
    stepIcon2:{
        flex:1,
        width:50,
        height:50,
        marginTop:18,
        textAlign:'center',
        color:"#f3841b"
    },
    stepDescs:{
        width:300,
        marginTop:0
    },
    stepDesc:{
        flex:1,
        textAlign:'center'
    },
    ocrPhotoTip:{
        color:"#2c87a9",
        fontSize: 14,
        height:30,
        lineHeight:30
    },
    ocrPhotoBlock:{
        position:'relative',
        width:cell_w * 0.9,
        height:180,
        marginBottom:20
    },
    ocrPhotoBg:{
        position:"absolute",
        top:0,
        width:"100%",
        height:"100%",
        backgroundColor:rgb(241, 241, 241),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:10
    },
    ocrPhotoBg2:{
        backgroundColor:"rgba(241, 241, 241,0)"
    },
    ocrPhotoBack:{
        position:"absolute",
        top:0,
        width:"100%",
        height:"100%",
        borderRadius:10,
        resizeMode:"stretch"
    },
    agreeBlock:{
        display:"flex",
        width:"100%",
        flexDirection:"row",
        alignItems: 'flex-start'
    },
    unselectView:{
        width:16,
        height:16,
        borderRadius:2,
        backgroundColor:"#fff",
        borderWidth:1,
        borderColor:"#ccc",
        alignItems:"center"
    },
    selectedView:{
        width:16,
        height:16,
        borderRadius:2,
        backgroundColor:"#666",
        borderWidth:1,
        borderColor:"#666",
        alignItems:"center"
    },
    selectDesc:{
        fontSize:16,
        marginLeft:6
    },
    protocolText:{
        padding:10,
        lineHeight:20,
        fontSize:14
    },
    videoBg:{
        backgroundColor:"rgba(0,0,0,0)",
        position:"absolute",
        width:cell_w,
        height:cell_h,
        top:80,
        left:0,
        alignItems:"center"
    },
    videoBgImg:{
        position:"absolute",
        top:80,
        left:0,
        width:cell_w,
        resizeMode:"contain",
        height:cell_h
    },
    videoTip:{
       width:cell_w * 0.9,
       textAlign:"left",
       fontSize:20,
       color:"#ecae10",
       marginTop:20
    },
    videoTip2:{
        color:"#666"
    },
    resultIconView:{
        width:60,
        height:60,
        borderRadius:30,
        borderColor:"#039404",
        borderWidth:4,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft:4,
        marginTop:40
    },
    successBg:{
        borderColor:"#039404",
    },
    errorBg:{
        borderColor:"#ca0505"
    },
    successIcon:{
        color:"#039404"
    },
    errorIcon:{
        color:"#ca0505"
    },
    successDescBlock:{
        alignItems: 'center'
    },
    successText1:{
        fontSize:18,
        color:"#333",
        marginTop:30,
        fontWeight:"800"
    },
    successText2:{
        fontSize:14,
        color:"#ecae10",
        marginTop:10
    },
    errorBtnBlock :{
        display:"flex",
        flexDirection:"row",
        alignItems: 'center',
        width:cell_w*0.9,
        paddingLeft:cell_w*0.025
    },
    modalOption:{
        lineHeight:40,
        width:"100%",
        height:40
    },
    pickerbtn: {
        width: cell_w*.9,
        marginTop: 20,
        backgroundColor: rgb(62, 44, 26),
        alignItems: 'center',
        borderRadius: 5
    }
})
module.exports = styles;