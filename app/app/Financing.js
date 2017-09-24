
import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  NativeModules,
  ScrollView,
  Platform
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//import Icon from 'react-native-vector-icons/FontAwesome'
import Navibar from "../component/HYHeader"
import { AnimatedCircularProgress } from 'react-native-circular-progress'
import * as FinancingAction from '../actions/FinancingAction'
import { permissions } from '../util/config'

import HYPassword from '../component/HYPassword'
import HYButton from '../component/HYButton'
import baseStyle from '../styles/base'
import HYActionSheet from '../component/HYActionSheet'
import Util, { setToken, requestAllPermission } from "../util/utils"


import financingStyle from '../styles/financing';
import  applyStyle from "../styles/applySteps";
var width = Dimensions.get('window').width;
//var pushNative = NativeModules.PushNative;

class Tab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
      quickList :[
          {
              display:"上传身份证",
              value:"OcrIndex",
              params:{
                step:1
              }
          },
          {
              display:"视频验证",
              value:"OcrIndex",
              params:{
                  step:3
              }
          },
          {
              display:"我要融资",
              value:"FinancingTab",
              params:{
              }
          },
          {
              display:"申请面签",
              value:"ApplyIndex",
              params:{
              }
          },
          {
              display:"扫一扫",
              value : "ScanQrCode",
              params : {}
          },
          {
              display:"登录入口",
              value : "LoginIn",
              params : {}
          },
          {
            display:"定位",
            value : "GetLocation",
            params : {}
          }
      ]
    }
    //debugger;
    let routerParams = this.props.navigation.state.params;
    if(!(routerParams && routerParams.action == "reset")){
        setToken(() => { this.props.actions.getFinancingDataAction(this._refreshDom) });
    }
  }

  componentDidMount() {
    if (Platform.OS === 'android') {
      requestAllPermission([
        permissions.CAMERA,
        permissions.WRITE_EXTERNAL_STORAGE
      ], () => {
        console.log('success')
      }, () => {
        console.log('fail')
      })
    }
  }
  _refreshDom = () => {
    this.props.actions.getFinancingDataAction();
  }
  _showInput() {
    this.setState({
      isShow: true
    })
  }
  _hideInput() {
    this.setState({
      isShow: false
    })
  }

  _onEnd(val) {
    this.setState({
      isShow: false
    })

    alert(val)
  }
  _downloadContract = (contractNo) => {
    //console.log("下载合同");
    // pushNative.RNInvokeReadContract(contractNo, (error, events) => {
    //   if (error) {
    //     console.log(error);
    //   } else {
    //     console.log('合同号' + events);
    //     alert(events)
    //   }
    // });
  }
  _renderContract = (contractNo) => {
    return (<View style={[baseStyle.container, { width: width * 0.9,alignItems: 'flex-end', paddingBottom:0,marginTop: 10,maxHeight:30}]}>
      <TouchableOpacity
        onPress={this._downloadContract.bind(this, contractNo)}
        disabled={false}
        style={{flexDirection:'row',marginBottom:0,height:20}}
        activeOpacity={0.4}
      >
        <Text style={baseStyle.otpBtnAble}>下载合同</Text>
      </TouchableOpacity>
    </View>);
  }
    _intoPage = (v) => {
        switch (v.value) {
            case "LoginIn":
                // pushNative.RNInvokeOCLoginOrRegistWithCallBack((error, events)=>{
                //     if (error) {
                //         //console.log(error);
                //         Util.handerError({msg:error});
                //     }
                // });
                break;
            case "ScanQrCode":
                // pushNative.RNInvokeOCScanQrCode("test",(error,events) => {
                //     if(error){
                //         Util.handerError({
                //             msg:error
                //         })
                //     }
                // });
                break;
            case "GetLocation":
              // pushNative.RNInvokeOCGetLocation("test",(error,events)=>{
              //     if(error){
              //         console.log("错误提示："+error);
              //     }else{
              //       //events
              //       console.log("events*************:"+events);
              //     }
              // });
              break;
            default:
                this.props.navigation.navigate(v.value, v.params)
        }
    }
  render() {
    let financingData = this.props.financingData;
    let btnContent = <HYButton text="申请面签" borderColor="#fff" width={width * .9} height={40} marginTop={40} textColor="#fff" textSize={15}
      onPress={() => this.props.navigation.navigate('ApplyIndex', { name: 'ApplyIndex' })}
    />;
    //debugger;
    if (financingData.isApplyed) {
      btnContent = <HYButton text="我要融资" borderColor="#fff" width={width * .9} height={40} textColor="#fff" textSize={15}
          onPress={() => this.props.navigation.navigate('FinancingTab', { name: 'FinancingTab' })}
      />
    }
    let contractContent = null;
    if (financingData.contractNo && financingData.contractNo != "") {
      contractContent = this._renderContract(financingData.contractNo);
    }

    return (
      <View style={financingStyle.container}>
        <Navibar title='财富e融' navigation={this.props.navigation} rightBtnText="我的融资" rightBtnOnPress={() => this.props.navigation.navigate('OrderTab', { name: 'OrderTab' })} />
        <ScrollView>
        <View style={financingStyle.pieZone}>
          <AnimatedCircularProgress
            size={230}
            width={15}
            fill={100}
            tintColor="rgb(115, 78, 43)"
            backgroundColor="rgb(62, 44, 26)" />
          <View style={financingStyle.pieInfo}>
            <Text style={financingStyle.info}>可用融资额度（元）</Text>
            <Text style={financingStyle.present}>{financingData.totalAmount}</Text>
            <HYButton
              text="额度详情"
              borderColor="#fff"
              borderRadius={3}
              width={80}
              height={26}
              backgroundColor="transparent"
              textColor="#fff"
              textSize={14}
            />
          </View>
        </View>
        <View style={financingStyle.limitZone}>
          <Text>您当前无可用融资额度</Text>
        </View>
        <View style={financingStyle.videoBtn}>
          {btnContent}
        </View>

        {contractContent}
            <View style={financingStyle.videoBtn}>
              <HYActionSheet data={this.state.quickList} renderItem={(v)=>{return v.display}} onchange={(v) => {this._intoPage(v)}}>
                  <HYButton
                      borderColor="#fff"
                      width={width * .9}
                      height={40}
                      marginTop={10}
                      textColor="#fff"
                      textSize={15}
                      text="快捷入口"
                  >
                  </HYButton>
              </HYActionSheet>
            </View>
          <HYPassword
              isShow={this.state.isShow}
              title='这里是标题'
              content='内容'
              onClose={this._hideInput.bind(this)}
              onEnd={this._onEnd.bind(this)}
          />
          </ScrollView>
      </View>
    )
  }

}

/*
 * state数据转换成组件属性
 */
function mapStateToProps(state) {
  //debugger;
  return {
    financingData: state.Financing.financingData
  }
}
/*
 * action作为props绑定到组件上
 */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(FinancingAction, dispatch)
  }
}
/*
 * 通过调用mapStateToProps mapDispatchToProps回调的配置,分别绑定到Page组件
 */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tab)
