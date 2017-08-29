import React, { Component } from 'react'
import {
    Text,
    View,
    Image,
    Dimensions
} from 'react-native'

import  Navibar from "../component/HYHeader";
import  baseStyle from "../styles/base";

export default class Abouts extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let Version = "1.0.0";
        return (
            <View style={[baseStyle.container,{marginTop:0}]}>
                <Navibar title='关于' leftBtn='back' navigation={this.props.navigation} />
                <View style={{marginTop:80}}>
                    <Image  source={require('../images/hy_login.png')}/>
                    <Text style={{textAlign:'center',marginTop:20,color:"#666"}}>版本号 {Version}</Text>
                </View>
            </View>
        );
    }
}