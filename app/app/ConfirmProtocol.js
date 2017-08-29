/*
*同意协议书页面
*/
import React from 'react';
import {
    View,
    Text,
    Dimensions,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import HYButton from '../component/HYButton';
import Navibar from "../component/HYHeader";
import Icon from 'react-native-vector-icons/FontAwesome';

import  baseStyle from "../styles/base";
import  applyStyle from "../styles/applySteps";
var width = Dimensions.get('window').width;
//协议查看页面 angle-right
/*
*this.props.toggleOptions， 切换是否同意文案
* this.props.optionState 当前是否同意，true为同意，false为不同意
* this.props.submitProtol 点击"下一步"操作
*/
class ConfirmProtocol extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        let viewObj = <View style={applyStyle.unselectView}></View>;
        let optionState = this.props.optionState ? this.props.optionState : false;
        if(optionState){
            viewObj = <View style={applyStyle.selectedView}>
                <Icon style={{color:'#fff',marginBottom:5}} name="check" size={14}/>
            </View>;
        }
        return (<View style={[baseStyle.container,applyStyle.container]}>
            <Navibar title="签署协议" leftBtn='back' navigation={this.props.navigation} />
            <ScrollView>
            <Text style={applyStyle.protocolText}>质押贷款是指贷款人按《担保法》规定的质押方式以借款人或第三人的动产或权利为质押物发放的贷款。可作为质押的质物包括：国库券（国家有特殊规定的除外），国家重点建设债券、金融债券、AAA级企业债券、储蓄存单等有价证券。出质人应将权利凭证交与贷款人。《质押合同》自权利凭证交付之日起生效。以个人储蓄存单出质的，应提供开户行的鉴定证明及停止支付证明。</Text>
            </ScrollView>
            <View style = {{position:'absolute',bottom:40}}>
                <TouchableOpacity  style={applyStyle.agreeBlock} onPress = {this.props.toggleOptions}>
                    {viewObj}
                    <Text style={applyStyle.selectDesc}>需本人同意协议</Text>
                </TouchableOpacity>
                <HYButton
                    text= "下一步"
                    width={width * .9}
                    height={40}
                    marginTop = {20}
                    textColor="#fff"
                    textSize={15}
                    margintop = {40}
                    disabled = {!optionState}
                    onPress = {this.props.submitProtol}
                />
            </View>
        </View>
        )
    }
}
export default ConfirmProtocol;