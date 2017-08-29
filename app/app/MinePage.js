import React,{Component,PropTypes} from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    ScrollView,
    TouchableOpacity,
    Image,
    Text,
    Switch
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome'
import Navibar from "../component/HYHeader";

//style
import minePageStyle from '../styles/minePage';

class HeaderRow extends Component{
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        return(
            <TouchableOpacity style={minePageStyle.headerrow}>
                <Image style={minePageStyle.header} source={require('../images/header.png')}/>
                <View style={minePageStyle.header_body}>
                    <Text style={minePageStyle.name}>王*</Text>
                    <Image style={minePageStyle.vip} source={require('../images/huiyuan.png')}/>
                </View>
            </TouchableOpacity>
        )
    }
}


class Row extends Component{
    constructor(props){
        super(props);
        this.state={}
    }

    static propTypes = {
        lefticon:PropTypes.element,
        text:PropTypes.string,
    }


    render(){
        console.log("this.props.nextrouter:"+this.props.nextrouter);
        let nextrouter = this.props.nextrouter;
        return(
            <TouchableOpacity style={minePageStyle.row} onPress = {()=> this.props.navigation.navigate(nextrouter, { name: nextrouter }) }>
                {this.props.lefticon}
                <Text style={minePageStyle.words}>{this.props.text}</Text>
                <Icon style={minePageStyle.icon} name="angle-right" size={30}/>
            </TouchableOpacity>
        )
        
    }
}



class Partingline extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){
        return (
            <View style={{marginLeft:15,borderBottomWidth:1,borderColor:"rgb(243,243,243)"}}></View>
        )
    }
}
export default class mine extends Component{
    constructor(props){
        super(props);
        this.state={

        }
        _rendericon = this._rendericon.bind(this)
    }

    _rendericon(thename){
        return (<Icon style={minePageStyle.icon2} name={thename} size={25}/>)
    }

    render(){

        return(
        <View style={minePageStyle.container}>
            <Navibar title='我的' navigation={this.props.navigation} />
            <ScrollView>
                <View style={minePageStyle.firstpart}>
                    <HeaderRow/>
                    <Partingline/>
                    <Row lefticon={this._rendericon("bank")} text="修改登录密码" nextrouter="ModifyLoginPwd" navigation={this.props.navigation}/>
                    <Partingline/>
                    <Row lefticon={this._rendericon("bank")} text="设置支付密码" nextrouter="ModifyPayPwd" navigation={this.props.navigation}/>
                    <Partingline/>
                    <TouchableOpacity style={minePageStyle.row}>
                        {this._rendericon("bank")}
                        <Text style={minePageStyle.words}>手势密码</Text>
                        <Switch onValueChange={()=>this.props.navigation.navigate("Gesture", {page: 'TabPage'})}/>
                    </TouchableOpacity>
                    <Partingline/>
                    <Row lefticon={this._rendericon("bank")} text="我的银行卡" nextrouter="BankCard" navigation={this.props.navigation}/>
                    <Partingline/>
                    <Row lefticon={this._rendericon("bank")} text="关于" nextrouter="Abouts" navigation={this.props.navigation}/>
                </View>
            </ScrollView>
        </View>)
    }
}

