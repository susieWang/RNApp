'use strict';
/**
 * @class MinePage
 * 
 * */

import React from 'react';
import {
  StyleSheet,
  PixelRatio,
  Dimensions,
} from 'react-native';

const cell_w=Dimensions.get('window').width;

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    bgcolor:{
        flex:1,
        backgroundColor:"rgb(242,242,242)"
    },
    firstpart:{
        backgroundColor:"#fff",
        width:cell_w,
        borderTopWidth:1,
        borderColor:"rgb(243,243,243)",
        borderBottomWidth:1,
        marginBottom:15,
    },
    secondpart:{
        width:cell_w,
        borderTopWidth:1,
        borderColor:"rgb(243,243,243)",
        borderBottomWidth:1,
        backgroundColor:"#fff",
        marginBottom:15,
    },
    thirdpart:{
        width:cell_w,
        borderTopWidth:1,
        borderColor:"rgb(243,243,243)",
        borderBottomWidth:1,
        backgroundColor:"#fff",
    },
    

    //HeaderRow样式
    headerrow:{
        justifyContent:"space-between",
        height:70,
        flexDirection:'row',
        alignItems:"center",
        paddingLeft:20,
        paddingRight:15,
    },
    header_body:{
        flexDirection:"column",
        paddingLeft:15,
        flex:1,
    },
    header:{
        width:50,
        height:50,
        borderRadius:25,
    },
    name:{
        height:20,
        color:'rgb(123,123,123)'
    },
    vip:{
        height:20,
        width:60
    },
    icon:{
        color:"rgb(220,220,220)"
    },


    //HeaderRow样式

    //row样式
    icon2:{
        
        color:"rgb(226,190,112)",
    },
    words:{
        flex:1,
        paddingLeft:25,
        fontSize:17,
        color:'rgb(123,123,123)'
    },
    row:{
        justifyContent:"space-between",
        height:50,
        flexDirection:'row',
        alignItems:"center",
        marginLeft:15,
        paddingRight:15,
    },
    text:{
        fontSize:16,
        marginTop:3,
        color:'rgb(123,123,123)'
    },
    //row样式
    
    //tworow样式
    twocolumn:{
        flexDirection:"row",
    },
    twocolumn_cell:{
        flex:1,
        margin:15,
        alignItems:"center",
    },
    icon3:{

    },
    gesture:{
        position:"absolute",
        top:44
    }
    //tworow样式
})

module.exports = styles;
