/*申请面签首页*/
import React from 'react';
import {
    Button,
    Image,
    View,
    Text,
    Dimensions,
    TouchableOpacity,
    Modal,
    Platform
} from 'react-native';
import Navibar from "../component/HYHeader";
import HYButton from '../component/HYButton';



import  baseStyle from "../styles/base";
import  applyStyle from "../styles/applySteps";
import HYActionSheet from '../component/HYActionSheet';
import Icon from 'react-native-vector-icons/Octicons'
var width = Dimensions.get('window').width;

import { requestAllPermission } from '../util/utils'
import { permissions } from '../util/config'

class ApplyIndex extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showSelect:false,
            photoTypeList:[
                {
                    display:"身份证",
                    value:"01"
                },{
                    display:"其他证件",
                    value:"02"
                }
            ]
        }
    }
    _renderTips(){
        let list = ["为了保障您的资金安全，本次申请需视频验证","过程约4-5分钟","验证通过后，后续申请可跳过此步骤"];
        return list.map((item)=>(<Text key={item.toString()} style={applyStyle.tipsText}>{item}</Text>))
    }
    _renderStepDesc() {
        let list = ["上传证件", "签订合同", "视频确认"];
        return list.map((item) => (<Text key={item.toString()}  style={applyStyle.stepDesc}>{item}</Text>));
    }
    _renderIcon(iconName){
        return (
            <View style={applyStyle.stepsIcon}><Icon style={{color:'#f3841b'}} name={iconName} size={20}/></View>
        )
    }
    _updatePhoto = (item)=>{
        this.setState({
            showSelect : false
        });

        if (Platform.OS === 'android') {
            requestAllPermission([
                permissions.CAMERA,
                permissions.WRITE_EXTERNAL_STORAGE
            ], () => {
                this.props.navigation.navigate('OcrIndex', { item: item })
            })
        } else {
            this.props.navigation.navigate('OcrIndex', { item: item })
        }

        
    }
    render() {
        return (
            <View style={[baseStyle.container,applyStyle.container]}>
                <Navibar title='视频验证' leftBtn='back' navigation={this.props.navigation} />
                <View style={applyStyle.stepsHeaderBg}>
                <Image style={applyStyle.stepsHeaderIcon}  source={require('../images/kefu.png')}/>
                </View>
                <View style = {applyStyle.tipsList}>
                    {this._renderTips()}
                </View>
                <View style={applyStyle.stepsIntro}>
                    <Text style={applyStyle.stepsHeader}>------3步即可完成视频验证------</Text>
                    <View style={applyStyle.stepsIcons}>
                        <Text style={applyStyle.stepIcon2}>------</Text>
                        {this._renderIcon("device-camera")}
                        <Text style={applyStyle.stepIcon2}>------</Text>
                        {this._renderIcon("file-text")}
                        <Text style={applyStyle.stepIcon2}>------</Text>
                        {this._renderIcon("device-camera-video")}
                        <Text style={applyStyle.stepIcon2}>------</Text>
                    </View>
                    <View style={[applyStyle.stepsIcons,applyStyle.stepDescs]}>
                        {this._renderStepDesc()}
                    </View>
                </View>
                 {/*<HYPicker*/}
                    {/*style={applyStyle.pickerbtn}*/}
                    {/*name='intDate'*/}
                    {/*contextColor={{color: '#fff'}}*/}
                    {/*data={this.state.photoTypeList}*/}
                    {/*pickerChange={ (v) => {this._updatePhoto(v)}}*/}
                {/*/> */}
                  <HYActionSheet data={this.state.photoTypeList} renderItem={(v)=>{return v.display}} onchange={(v) => {this._updatePhoto(v)}}>
                    <HYButton
                        borderColor="#fff"
                        width={width * .9}
                        height={40}
                        marginTop={40}
                        textColor="#fff"
                        textSize={15}
                        text="请选择"
                    >
                    </HYButton>
                </HYActionSheet>
            </View>

        );
    }
}
export default ApplyIndex;