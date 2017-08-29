'use strict';
/**
 * @class financingConfirm
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
  container: {
    flex: 1,
    width: cell_w,
    backgroundColor: 'rgb(237, 237, 237)'
  },
  rowItem: {
    marginBottom: 10
  },
  cellItem: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'flex-end',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(247,247,247)'
  },
  rowBetween: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff'
  },
  keyContent: {
    color: 'red',
    fontSize: 20
  },
  contentUnit: {
    color: 'red'
  },
  contentTitle: {
    marginBottom: 5
  },
  submitBtn: {
    alignItems: 'center',
    marginBottom: 10,
    flexDirection: 'column',
    paddingLeft: 10,
    paddingRight: 10,
    height: 40
  },
  modalTitle:{
      color:'#666',
      textAlign:'center',
      width:'90%',
      height:40,
      lineHeight:40
  },
  modalBtns:{
      flex:2,
      flexDirection:'row',
      justifyContent:'space-between',
      marginTop:20,
      width:cell_w*0.8
  },
  modalBg:{
      height:180,
      width:'90%',
      backgroundColor:'#E2E2E2',
      borderRadius:10,
      alignItems:'center',
      justifyContent:'center'
  }

});
module.exports = styles;
