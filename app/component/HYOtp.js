import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableOpacity
} from 'react-native';
import HYInput from '../component/HYInput';
import baseStyle from '../styles/base';
import APIS from '../util/config';

class HYOtp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            otpBtnText: "获取",
            btnDisaled: false,
            phone: "",
            otpCode: ""
        }
        this.phoneInputV = "";
        this.timer = null;
    }
    _getOtp = () => {
        let self = this;
        if(!APIS.regs["phone"].test(self.phoneInputV)){
            alert("请输入正确的手机号");
            return false;
        }
        self.setState({
            phone : self.phoneInputV,
            btnDisaled :  true
        })
        //TODO 发送请求，获取校验码
        self._startTimer();
    }
    _startTimer = () => {
        let self = this,count = 60;
        self.timer = setInterval(function () {
            if(count < 0){
                clearInterval(self.timer);
                self.setState({
                    otpBtnText : "重新获取",
                    btnDisaled :  false
                })
            }else{
                self.setState({
                    otpBtnText : count+""
                })
                count--;
            }
        },1000)
    }
    _setPhone = (text) => {
        this.phoneInputV = text;
    }
    _setOtpCode = (text) => {
        this.setState({
            otpCode : text
        });
        let self = this;
        console.log("self.state.phone:"+self.state.phone);
        /*将手机号，校验码传给父类,是否已正常输入，true or false*/
        if(text != "" && self.state.phone != ""){
            self.props.otpSuccessFun(true,self.state.phone,text);
        }else{
            self.props.otpSuccessFun(false,self.state.phone,text);
        }
    }
    render(){
        let btnStyle = this.state.btnDisaled ? baseStyle.otpBtnDisable : baseStyle.otpBtnAble;
        return (
            <View>
                <HYInput style={baseStyle.inputLayout}>
                    <TextInput
                        style={baseStyle.textInput}
                        placeholder={'手机号'}
                        onChangeText={this._setPhone}
                        clearButtonMode={'while-editing'}
                        keyboardType = "numeric"
                        clearTextOnFocus = {false}
                        maxLength = {11}
                    />
                </HYInput>
                <View style={baseStyle.otpBlock}>
                    <HYInput style={baseStyle.inputLayout}>
                        <TextInput
                            style={baseStyle.textInput}
                            placeholder={'验证码'}
                            onChangeText={this._setOtpCode}
                            clearButtonMode={'never'}
                            keyboardType = "numeric"
                            clearTextOnFocus = {false}
                            maxLength = {8}
                        />
                    </HYInput>
                    <TouchableOpacity
                        onPress={this._getOtp}
                        disabled = {this.state.btnDisaled}
                        style = {baseStyle.otpDesc}
                        activeOpacity={0.4}
                    >
                        <Text style={btnStyle}>{this.state.otpBtnText}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
export default HYOtp;