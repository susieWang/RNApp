import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Dimensions
} from 'react-native';

import HYInput from '../component/HYInput'
import HYButton from '../component/HYButton'
import Navibar from "../component/HYHeader"
import HYOtp from "../component/HYOtp"
import APIS from '../util/config'
import HYPayPassword from "../component/HYPayPassword"

import baseStyle from '../styles/base';
var width = Dimensions.get('window').width;
class ModifyPayPwd extends Component {
    constructor(props){
        super(props);
        this.state = {
            btnDisaled : true,
            step : 0,
            btnText : "下一步"
        };
    }
    _submitForm = ()=> {
        let self = this;
        if(this.state.step === 0){
            if(self.refs.hyotp.timer){clearInterval(self.refs.hyotp.timer)}
            //self.refs.hyotp
            //debugger;
            /*修改状态*/
            //TODO 提交手机号，校验码
           this.setState({
               step : 1,
               btnText:"提交",
               btnDisaled : true
           });
        }else{
            /*提交数据*/
        }
        //alert("提交数据");
    }
    _otpSuccessFun = (mark,phone,otpCode) => {
        console.log("********phone "+phone);
        console.log("********otp "+otpCode);
        this.setState({
            btnDisaled:!mark
        });
    }
    render(){
        let content =  <HYOtp ref="hyotp"  otpSuccessFun={this._otpSuccessFun}/>;
        if(this.state.step === 1){
            content = <HYPayPassword
                style={{borderRadius:8,width:width*0.8,height:45,marginTop:40}}
                onEnd={(text)=>{console.log("paypassword输入的值为"+text)}}
            >
            </HYPayPassword>;
        }
        //console.log("otp ***** :"+this.otpObj.state.otpCode);
        return (
            <View style={baseStyle.container}>
                <Navibar title='设置支付密码' leftBtn='back' navigation={this.props.navigation} />
                {content}
                <HYButton
                    text= {this.state.btnText}
                    width={width * .9}
                    height={40}
                    marginTop = {40}
                    textColor="#fff"
                    textSize={15}
                    margintop = {40}
                    disabled = {this.state.btnDisaled}
                    onPress = {this._submitForm}
                />
            </View>
        );
    }
}

export default ModifyPayPwd;