import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Dimensions,
    ActivityIndicator,
    RefreshControl
} from 'react-native';
//style
import orderItemStyle from '../styles/orderItem';

class Item extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            row: this.props.row
        }
    }
    render() {
        const row = this.state.row
        return (
            <TouchableOpacity 
                onPress={this.props.onSelect.bind(this)}
                underlayColor="rgb(210, 230,255)"
            >
                <View style={orderItemStyle.item}>
                    <View style={orderItemStyle.itemLeft}>
                        <Text>{row.type}</Text>
                        <Text>{row.title}</Text>
                        <Text>{row.time}</Text>
                    </View>
                    <View style={orderItemStyle.itemRight}>
                        <Text style={[orderItemStyle.alignRight, row.trade ? orderItemStyle.tradeSuccess : orderItemStyle.tradeFail]}>{row.trade? '交易成功' : '交易失败'}</Text>
                        <Text style={orderItemStyle.alignRight}>{row.money}元</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}


export default Item