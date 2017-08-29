/*
*视频通话
*/
import React from 'react';
import {
    View,
    Text,
    Dimensions,
    Image,
    NativeModules
} from 'react-native';
import HYButton from '../component/HYButton';
import Navibar from "../component/HYHeader";

import  baseStyle from "../styles/base";
import  applyStyle from "../styles/applySteps";
var width = Dimensions.get('window').width;
//var pushNative  = NativeModules.PushNative;

class VideoCall extends React.Component {
    constructor(props){
        super(props)
    }
    _startCall = ()=>{
        var self = this;
        console.log("开始视频通话");
        // pushNative.RNInvokeNIMVideo('NIM',(error, events)=>{
        //     if (error) {
        //         console.log(error);

        //     }else {
        //         console.log('zbc'+ events);
        //         self.props.navigation.navigate("ApplyResult", { name: "ApplyResult"})
        //     }
        // });
    }
    render(){
        return (<View style={[baseStyle.container,applyStyle.container]}>
            <Navibar title="视频连线" leftBtn='back' navigation={this.props.navigation} />
            <Image style={applyStyle.videoBgImg}  source={require('../images/kefu_02.png')}/>
            <View style={applyStyle.videoBg}>
                <Text style={applyStyle.videoTip}>与客服通话</Text>
                <Text style={[applyStyle.videoTip,applyStyle.videoTip2]}>确认您的身份信息</Text>
                <View style = {{position:'absolute',bottom:100}}>
                    <HYButton
                        text= "连线视频客服"
                        width={width * .9}
                        height={40}
                        marginTop = {20}
                        textColor="#fff"
                        textSize={15}
                        margintop = {40}
                        disabled = {false}
                        onPress = {this._startCall}
                    />
                </View>
            </View>
        </View>);
    }
}
export default VideoCall;