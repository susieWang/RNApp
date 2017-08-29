import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Button,
  TextInput,
  Platform
} from 'react-native';
import Navibar from "../component/HYHeader"

//style
import indexTabStyle from '../styles/indexTab';
import { requestAllPermission } from '../util/utils'
import { permissions } from '../util/config'

class IndexTab extends Component {

  render() {
    return (
      <View style={indexTabStyle.container}>
        <Navibar title='主页' navigation={this.props.navigation} />
        <Text style={indexTabStyle.welcome}>
          IndexTab
        </Text>

        <TouchableHighlight
          underlayColor='transparent'
          style={{ height: 30 }}
          onPress={() => this.props.navigation.navigate('FinancingTab', { name: 'FinancingTab' })}
        >
          <Text>to list page</Text>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor='transparent'
          style={{ height: 30 }}
          onPress={() => this.props.navigation.navigate('ApplyIndex', { name: 'ApplyIndex' })}
        >
          <Text>申请流程</Text>
        </TouchableHighlight>
      </View>
    );
  }


  constructor(props) {
    super(props)
  }

  componentDidMount() {
    if (Platform.OS === 'android') {
      requestAllPermission([
        permissions.CAMERA,
        permissions.WRITE_EXTERNAL_STORAGE
      ], () => {
        console.log('success')
      }, () => {
        console.log('fail')
      })
    }
  }

}


export default IndexTab