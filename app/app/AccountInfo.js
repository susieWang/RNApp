import React, { Component, PropTypes } from 'react'
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import HYHeader from '../component/HYHeader'
import Icon from 'react-native-vector-icons/FontAwesome'

//style
import accountInfoStyle from '../styles/accountInfo';

class Row extends Component {
    constructor(props) {
        super(props)
    }
    static propTypes = {
        editable: PropTypes.bool
    }
    static defaultProps = {
        editable: true
    };
    renderIcon() {
        if(this.props.editable){
            return(
                <View style={[accountInfoStyle.containerCell, accountInfoStyle.cellIcon]}>
                    <Icon
                        style={accountInfoStyle.icon}
                        name="angle-right"
                        size={30}
                    />
                </View>
            )
        }
    }
    render() {
        return (
            <TouchableOpacity style={accountInfoStyle.containerItem}>
                <View style={[accountInfoStyle.containerCell, accountInfoStyle.cellTitle]}>
                    <Text style={accountInfoStyle.containerContent}>{this.props.name}</Text>
                </View>
                <View style={[accountInfoStyle.containerCell, accountInfoStyle.cellInfo]}>
                    {this.props.value}
                </View>
                {this.renderIcon()}
                
            </TouchableOpacity>
        )
    }
}

class AccountInfo extends Component {

    renderValue({text, type, iconName=''}) {
        switch(type) {
            case 'text':
                return <Text>{text}</Text>
            case 'icon':
                return (
                    <Icon 
                        name={iconName}
                        size={30}
                    />
                )
            default: 
                return <Text>{text}</Text>
        }
    }

    render() {
        return (
            <View style={accountInfoStyle.container}>
                <HYHeader title='账号详情' navigation={this.props.navigation} />
                <ScrollView>
                    <View style={accountInfoStyle.userInfoChuck}>
                        <Row name='用户名' value={this.renderValue({type: 'text', text: '设置'})} />
                        <Row name='头像' value={this.renderValue({type: 'icon', iconName: 'user-circle'})} />
                        <Row name='二维码' value={this.renderValue({type: 'icon', iconName: 'qrcode'})} />
                    </View>
                    <View style={accountInfoStyle.userInfoChuck}>
                        <Row name='VIP等级' value={this.renderValue({type: 'text', text: '普通会员'})} />
                        <Row name='风险测评' value={this.renderValue({type: 'text', text: '平衡型'})} />
                        <Row name='理财经理' value={this.renderValue({type: 'text'})} />
                        <Row name='远程投顾' value={this.renderValue({type: 'text', text: '服务经理vip000号'})} />
                    </View>
                    <View style={accountInfoStyle.userInfoChuck}>
                        <Row name='我的身份信息' value={this.renderValue({type: 'text'})} />
                        <Row name='手机号码' value={this.renderValue({type: 'text', text: '18116409602'})} />
                        <Row name='平安财富宝账号' editable={false} value={this.renderValue({type: 'text', text: '30492958902384029835'})} />
                    </View>
                    <View style={accountInfoStyle.userInfoChuck}>
                        <Row name='联系地址和邮箱' value={this.renderValue({type: 'text'})} />
                    </View>
                </ScrollView>
            </View>
        );
    }
}
export default AccountInfo