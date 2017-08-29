// import React, { Component, PropTypes } from "react";
// import {
//   Text,
//   View,
//   Dimensions,
//   TouchableOpacity
// } from "react-native";

// const devicewidth = Dimensions.get("window").width;

// export default class HYButton extends Component {
//   constructor(props) {
//     super(props);
//   }
//   static propTypes = {
//     ...View.PropTypes,
//     text: PropTypes.string.isRequired,
//     color: PropTypes.string,
//     textSize: PropTypes.number,
//     textColor: PropTypes.string,
//     onpress: PropTypes.func,
//     disabled:PropTypes.bool,
//   }
//   static defaultProps = {
//     width: devicewidth * 0.9,
//     height: 50,
//     textSize: 20,
//     backgroundColor: "rgb(115,78,43)",
//     borderColor: "rgb(115,78,43)",
//     borderWidth: 1,
//     textColor: "rgb(255,255,255)",
//     borderRadius: 8,
//     disabled:false,
//   };
//   render() {
//     let opacity = this.props.disabled?{opacity:0.4}:{};
//     return (
//       <TouchableOpacity
//         style={{
//           width: this.props.width,
//           height: this.props.height,
//           marginTop:this.props.marginTop
//         }}
//         activeOpacity={0.4}
//         onPress={this.props.onpress}
//         disabled={this.props.disabled}
//       >
//         <View style={[{
//           width: this.props.width,
//           height: this.props.height,
//           borderRadius: this.props.borderRadius,
//           borderColor: this.props.borderColor,
//           borderWidth: this.props.borderWidth,
//           backgroundColor: this.props.backgroundColor,
//           justifyContent: "center",
//           alignItems: "center",
//         },opacity]}>
//           <Text style={{ fontSize: this.props.textSize, color: this.props.textColor }}>{this.props.text}</Text>
//         </View>
//       </TouchableOpacity>
//     )
//   }
// }

//  text必要属性，按钮中的文字。
//  onpress属性为按下处罚函数。
//  宽度和高度都是非必要属性，默认宽度为设备宽度的0.9倍，默认高度为50。


import React, { Component, PropTypes } from "react";
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity
} from "react-native";

const devicewidth = Dimensions.get("window").width;

export default class HYButton extends Component {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    ...View.PropTypes,
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
    textSize: PropTypes.number,
    textColor: PropTypes.string,
    onPress: PropTypes.func,
    disabled:PropTypes.bool,
  }
  static defaultProps = {
    width: devicewidth * 0.9,
    height: 50,
    textSize: 20,
    backgroundColor: "rgb(115,78,43)",
    borderColor: "rgb(115,78,43)",
    borderWidth: 1,
    textColor: "rgb(255,255,255)",
    borderRadius: 8,
    disabled:false,
  };
  render() {
    let opacity = this.props.disabled?{opacity:0.4}:{};
    return (
      <TouchableOpacity
        style={{
          width: this.props.width,
          height: this.props.height,
          marginTop:this.props.marginTop
        }}
        activeOpacity={0.4}
        onPress={this.props.onPress}
        disabled={this.props.disabled}
      >
        <View style={[{
          width: this.props.width,
          height: this.props.height,
          borderRadius: this.props.borderRadius,
          borderColor: this.props.borderColor,
          borderWidth: this.props.borderWidth,
          backgroundColor: this.props.backgroundColor,
          justifyContent: "center",
          alignItems: "center",
        },opacity]}>
          <Text style={{ fontSize: this.props.textSize, color: this.props.textColor }}>{this.props.text}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}
