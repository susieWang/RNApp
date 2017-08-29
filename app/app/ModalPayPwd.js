import React, { Component } from 'react';
import {
    Dimensions,
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import Modal from '../component/HYModal';
import PayPwd from '../component/HYPayPassword';
import HYButton from '../component/HYButton';
const width = Dimensions.get('window').width;
//style
import baseStyle from '../styles/base'
import financingConfirmStyle from '../styles/financingConfirm'

class ModalPayPwd extends Component {
    constructor(props){
        super(props);
        this.state = {
            text:"",
            maxLength:6,
            btnDisabled:true
        }
    }
    _endPwd = (text) => {
        this.setState({
            text:text,
            btnDisabled:false
        });
        console.log("_endPwd***********"+text);
    }
    _changePwd = (text) => {
        this.setState({
            text:text,
            btnDisabled:text.length < this.state.maxLength ? true : false
        });
        console.log("_changePwd***********"+text);
    }
    render(){
        return(
            <Modal style={baseStyle.container}>
                <View style={{height:'100%',backgroundColor:'rgba(0, 0, 0, 0.5)',alignItems:'center',justifyContent:'center'}}>
                    <View style={financingConfirmStyle.modalBg}>
                        <Text style={financingConfirmStyle.modalTitle}>请输入支付密码</Text>
                        <PayPwd style={{borderRadius:8,width:width*0.8,height:45,marginTop:10}}
                                maxLength = {this.state.maxLength}
                                onEnd={this._endPwd}
                                onChange = {this._changePwd}>
                        </PayPwd>
                        <View  style={financingConfirmStyle.modalBtns}>
                            <HYButton width={width*0.35}
                                      height = {40}
                                      marginTop = {0}
                                      onPress = {()=>{this.props.cancel(this.state.text)}}
                                      disabled = {false}
                                      borderRadius = {4}
                                      borderColor = {"#fff"}
                                      borderWidth = {0}
                                      backgroundColor = {'#fff'}
                                      text = {'取 消'}
                                      textColor = {'#333'}
                                      textSize = {16}
                            />
                            <HYButton width={width*0.35}
                                      height = {40}
                                      marginTop = {0}
                                      onPress =  {()=>{this.props.confirm(this.state.text)}}
                                      disabled = {this.state.btnDisabled}
                                      borderRadius = {4}
                                      borderColor = {"#2582FF"}
                                      borderWidth = {0}
                                      backgroundColor = {'#2582FF'}
                                      text = {'确 定'}
                                      textColor = {'#fff'}
                                      textSize = {16}
                            />
                        </View>
                    </View>
                </View>
            </Modal>
        );
    }
}

export default ModalPayPwd;