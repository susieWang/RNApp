import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  Dimensions
} from 'react-native'
import Swiper from 'react-native-swiper'
import Mbutton from '../component/HYButton'
//style
import introStyle from '../styles/intro';
const width = Dimensions.get("window").width;

export default class extends Component {
  _changePage() {
    this.props.hideIntro()
  }
  render() {
    return (
      <View>
        <Swiper
          style={introStyle.wrapper}
          orizontal={true}
          loop={false}
        >
          <View style={introStyle.slide1}>
            <Text style={introStyle.text}>1</Text>
          </View>
          <View style={introStyle.slide2}>
            <Text style={introStyle.text}>2</Text>
          </View>
          <View style={introStyle.slide3}>
            <Text style={introStyle.text}>3</Text>
            <Mbutton
              text="跳转主页"
              borderColor="#fff"
              width={width * .9}
              height={40}
              onPress={this._changePage.bind(this)}
              textColor="#fff"
              textSize={15}
            />
          </View>
        </Swiper>
      </View>
    )
  }
}