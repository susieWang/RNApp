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
import APIS from '../util/config'

import baseStyle from '../styles/base';
import mineStyle from '../styles/minePage';

var width = Dimensions.get('window').width;
class ModifyLoginPwd extends Component {
    constructor(props){
        super(props);
        this.state = {
            btnDisaled : true
        };
        //密码校验
        this.pwdObjs = {
            oldPwd:{
                value:'',
                reg:APIS.regs.oldLoginPwd,
                valid:false
            },
            newPwd:{
                value:'',
                reg:APIS.regs.loginPwd,
                valid:false
            },
            copyPwd:{
                value:'',
                reg:APIS.regs.loginPwd,
                valid:false
            }
        };
    }
    _setInputValue = (name,v) => {
        var self = this;
        self.pwdObjs[name].value = v;
        var mark = false;
        for(key in self.pwdObjs){
            let el = self.pwdObjs[key];
            el.valid = el.reg.test(el.value);
            //console.log(key+"*****"+el.value+"*******"+el.valid);
            if(!el.valid){
                mark = true;
            }
        }
        if(self.pwdObjs["newPwd"].value != self.pwdObjs["copyPwd"].value) {
            mark = true;
        }
        self.setState({
            btnDisaled : mark
        });
    }
    _submitForm = ()=> {
        alert("可以点击*****");
    }
    render(){
        //console.log("********render");
        return (
            <View style={baseStyle.container}>
                <Navibar title='修改登录密码' leftBtn='back' navigation={this.props.navigation} />
                <HYInput style={baseStyle.inputLayout}>
                    <TextInput
                        style={baseStyle.textInput}
                        placeholder={'原密码'}
                        secureTextEntry={true}
                        onChangeText={(text) => this._setInputValue('oldPwd',text)}
                        clearButtonMode={'while-editing'}
                    />
                </HYInput>
                <HYInput style={baseStyle.inputLayout}>
                    <TextInput
                        style={baseStyle.textInput}
                        placeholder={'新密码(8-16位数字字母下划线组合)'}
                        secureTextEntry={true}
                        onChangeText={(text) => this._setInputValue('newPwd',text)}
                        clearButtonMode={'while-editing'}
                    />
                </HYInput>
                <HYInput style={baseStyle.inputLayout}>
                    <TextInput
                        style={baseStyle.textInput}
                        placeholder={'确认新密码'}
                        secureTextEntry={true}
                        onChangeText={(text) => this._setInputValue('copyPwd',text)}
                        clearButtonMode={'while-editing'}
                    />
                </HYInput>
                <HYButton
                    text="提交"
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

export default ModifyLoginPwd;
