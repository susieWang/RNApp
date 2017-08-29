/*申请面签首页*/
import React from 'react';
import {
    View,
    Text,
    Dimensions,
    ScrollView
} from 'react-native';
import Navibar from "../component/HYHeader";
import HYButton from '../component/HYButton';
import { NavigationActions } from 'react-navigation';

import  baseStyle from "../styles/base";
import  applyStyle from "../styles/applySteps";
import Icon from 'react-native-vector-icons/Octicons'
var width = Dimensions.get('window').width;

class ApplyResult extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            checkSuccess:true
        };
    }
    _renderSuccess = () => { //渲染成功视图
        return (<View style={baseStyle.container}>
            <View style={[applyStyle.resultIconView,applyStyle.successBg]}>
                <Icon style={applyStyle.successIcon} name="check" size={33}/>
            </View>
            <View style={applyStyle.successDescBlock}>
                <Text style={applyStyle.successText1}>您已通过验证</Text>
                <Text style={applyStyle.successText2}>只需三步即可提交融资申请</Text>
            </View>
            <HYButton
                text= "选择融资产品"
                width={width * .9}
                height={40}
                marginTop = {40}
                textColor="#fff"
                textSize={15}
                onPress = {()=>{this._nextOprate('FinancingTab')}}
            />
        </View>);
    }
    _renderError = () => {//渲染失败视图
        return (<View style={baseStyle.container}>
            <View style={[applyStyle.resultIconView,applyStyle.errorBg]}>
                <Icon style={applyStyle.errorIcon} name="x" size={33}/>
            </View>
            <View style={applyStyle.successDescBlock}>
                <Text style={applyStyle.successText1}>抱歉，验证未通过</Text>
            </View>
            <View style={applyStyle.errorBtnBlock}>
                <HYButton
                    text= "返回融资首页"
                    width={width * .4}
                    height={40}
                    marginTop = {40}
                    textColor="#fff"
                    textSize={15}
                    onPress = {()=>{this._nextOprate('Financing')}}
                />
                <HYButton
                    text= "重新验证"
                    width={width * .4}
                    height={40}
                    marginTop = {40}
                    textColor="#fff"
                    textSize={15}
                    onPress = {()=>{this._nextOprate('ApplyIndex')}}
                />
            </View>
        </View>);
    }
    _nextOprate = (key) => {
        //debugger;
       // this.props.navigation.navigate(key, { name: key})
        let resetAction = NavigationActions.reset({
            index: 1,
            actions: [
                NavigationActions.navigate({ routeName: "TabPage",params:{action:"reset"}}),
                NavigationActions.navigate({ routeName: key})
            ]
        })
        this.props.navigation.dispatch(resetAction)
    }
    render(){
        let viewContent = null;
        if(this.state.checkSuccess){
            viewContent = this._renderSuccess();
        }else{
            viewContent = this._renderError();
        }
        return (<View  style={[baseStyle.container,applyStyle.container]}>
            <Navibar title="验证结果" navigation={this.props.navigation} />
            {viewContent}
        </View>)
    }
}
export default ApplyResult;