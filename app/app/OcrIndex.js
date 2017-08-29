/*
* 身份证上传页面
*/
import React from 'react';
import {
    Button,
    Image,
    View,
    Text,
    Dimensions,
    ScrollView,
    TouchableOpacity,
    NativeModules
} from 'react-native';
import Navibar from "../component/HYHeader";
import HYButton from '../component/HYButton';
import ConfirmProtocol from "./ConfirmProtocol";
import VideoCall from  "./VideoCall";
import Util from "../util/utils";

import  baseStyle from "../styles/base";
import  applyStyle from "../styles/applySteps";
import Icon from 'react-native-vector-icons/SimpleLineIcons'
var width = Dimensions.get('window').width;
//var pushNative = NativeModules.PushNative;


class OcrIndex extends React.Component {
    constructor(props){
        super(props);
        let initStep = 1;
        let params =  this.props.navigation.state.params;
        if(params && params.step){
            initStep = params.step
        }
        //debugger;
        this.state = {
            btnDisabled : true,
            btnText:"确认上传",
            step:initStep,
            argreeStatus:false,
            identityObj :{
                title:"",
                tip:"请上传身份证的正反面",
                list:[{
                    type:"0101",
                    title:"身份证正面",
                    path:null
                },{
                    type:"0102",
                    title:"身份证反面",
                    path:null
                }]
            },
            otherObj : {
                title:"",
                tip:"请上传证件照片",
                list:[{
                    type:"0201",
                    title:"其他证件",
                    path:null
                }]
            },
            initItem : {
                display:"身份证",
                value:"01"
            }
        }
    }
    componentWillMount(){
        let params = this.props.navigation.state.params;
        if(this.state.step === 1 && params.item && (this.state.initItem.value != params.item.value)){
            this.setState({
                initItem : params.item
            });
        }
    }
    _submit = (step)=>{ //提交处理TODO待修改
        var self = this;
        if(self.state.step === 1){//上传证件
            this.setState({
                btnDisabled:true,
                btnText:"上传中"
            });
            let path = new Array(),list = new Array();
            if(this.state.initItem.value === "01"){ //身份证
                list = self.state.identityObj.list;
            }else{//其他证件
                list = self.state.otherObj.list;
            }
            list.forEach(function(el,i,arr){
                let obj = {
                    type:el.type,
                    path:el.path
                }
                path.push(obj);
            })
            //格式类似于："[{"type":"0101","path":"https://facebook.github.io/react/img/logo_og.png"},{"type":"0102","path":"https://facebook.github.io/react/img/logo_og.png"}]"
            path = JSON.stringify(path); //转换为string格式

            // pushNative.RNInvokeOCUploadPicture(path,(error,events)=>{
            //     //debugger;
            //     if(error){
            //         //console.log(error);
            //         Util.handerError({
            //             msg : error
            //         })
            //         this.setState({
            //             btnDisabled:false,
            //             btnText:"确认上传"
            //         });
            //     }else
            //     {
            //         //上传成功后，点击进入下一页.备注：请在上传成功的回调中调用
            //         self.setState({
            //             step:2
            //         });
            //     }
            // });



        }else if(self.state.step === 2){//同意协议
            self.setState({
                step:3
            });
        }else if(self.state.step === 3){

        }
    }
    _scanningCard = (type)=>{//扫描证件
        //type:0101  代表正面 0102 代表反面
        var self = this;
        if(type && type.substr(0,2) == "01"){
            //身份证
            console.log("身份证type：" + type);
            // pushNative.RNInvokeOCOCRCamera(type,(error, events)=>{
            //     if (error) {
            //         console.log(error);
            //     }else {
            //         console.log('zbc'+ events);
            //         let index = parseInt(type.substr(3))-1;
            //         let obj = self.state.identityObj;
            //         //path的值为照片地址
            //         obj["list"][index].path = events;
            //         self.setState({
            //             identityObj : obj
            //         });
            //         self._changeBtnState("identityObj");
            //     }
            // });


        }else{
            console.log("其他证件type：" + type);
            var chooseTypes = {chooseType:3, picNum:1};
            // pushNative.RNInvokeOCChoosePicture(JSON.stringify(chooseTypes),(error,events) =>{
            //     if(error){
            //         console.log(error);
            //     }else{
            //         console.log("相机********"+events);
            //         let index = parseInt(type.substr(3))-1;
            //         let obj = self.state.otherObj;
            //         //path的值为照片地址
            //         obj["list"][index].path = events;
            //         self.setState({
            //             otherObj : obj
            //         });
            //         self._changeBtnState("otherObj");
            //     }
            // });
        }
    }
    _changeBtnState = (key) => { //"上传照片"按钮是否可以点击
        var list = this.state[key].list,disableMark = false;
        for(let i=0;i<list.length;i++){
            let el = list[i];
            if(!el.path){disableMark = true;}
        }
        this.setState({
            btnDisabled:disableMark
        });
    }
    _renderCardsEl = (title,type,path) =>{ //渲染每个照片初始状态
        let styleArr = [applyStyle.ocrPhotoBg];
        let imageObj = null;
        let pressObj = <TouchableOpacity style={styleArr} onPress={() => {this._scanningCard(type)}}>
        </TouchableOpacity>;
        if(path){
            styleArr.push(applyStyle.ocrPhotoBg2);
            imageObj =  <Image style={applyStyle.ocrPhotoBack} source={{uri: path}}/>;
        }else{
            pressObj =
                <TouchableOpacity style={styleArr} onPress={() => {this._scanningCard(type)}}>
                    <Icon style={{color:'#333',marginBottom:5}} name="frame" size={20}/>
                    <Text >{title}</Text>
                </TouchableOpacity>;
        }
        return (
            <View style={applyStyle.ocrPhotoBlock} key={type.toString()}>
                {imageObj}
                {pressObj}
            </View>);
    }
    _renderCards = (key)=>{
        let List = this.state[key].list;
        let tip = this.state[key].tip;
        return (<View>
            <Text style={applyStyle.ocrPhotoTip}>{tip}</Text>
            {List.map((item)=>(this._renderCardsEl(item.title,item.type,item.path)))}
        </View>);
    }
    _toggleOptions = ()=>{ //切换是否同意协议书
        this.setState({
            argreeStatus:!this.state.argreeStatus
        })
    }
    _renderOcrContainer = ()=>{ //渲染证件上传页面，可以提取出
        let viewObj = this._renderCards("identityObj");
        if(this.state.initItem.value != "01"){
            viewObj = this._renderCards("otherObj");
        }
        return (<View  style={baseStyle.container}>
            <Navibar title={"上传"+this.state.initItem.display} leftBtn='back' navigation={this.props.navigation} />
            {viewObj}
            <View style = {{position:'absolute',bottom:40}}>
                <HYButton
                    text= {this.state.btnText}
                    width={width * .9}
                    height={40}
                    marginTop = {40}
                    textColor="#fff"
                    textSize={15}
                    margintop = {40}
                    disabled = {this.state.btnDisabled}
                    onPress = { () => {this._submit()}}
                />
            </View>
            </View>
        )
    }
    render(){
        let renderContent = null;
        if(this.state.step === 1){
            renderContent = this._renderOcrContainer();
        }else if(this.state.step === 2){
            renderContent =  <ConfirmProtocol submitProtol={this._submit} navigation = {this.props.navigation} toggleOptions={this._toggleOptions} optionState = {this.state.argreeStatus}/>;
        }else if(this.state.step === 3){
            renderContent = <VideoCall navigation = {this.props.navigation} />
        }
        return (
            <View style={[baseStyle.container,applyStyle.container]}>
                {renderContent}
            </View>
        );
    }
}
export default OcrIndex;