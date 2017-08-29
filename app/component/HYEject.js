import React, { Component,PropTypes } from 'react'
import { 
  Text,
  TouchableOpacity,
  View,
  Button,
  Dimensions,
  Modal,
  StyleSheet,
  Animated,
} from 'react-native'

 
const deviceWidth=Dimensions.get('window').width; 
export default class HYEject extends Component {
  state = {
    changeValue: new Animated.Value(0),
    isModalVisible: false
  }

  static propTypes = {
    successfunc:PropTypes.func,//当bottomType是comfrim的时候触发successfunc回调。whether的时候都触发。
    failfunc:PropTypes.func,
    bottomtype:PropTypes.string,//'whether':['确认','取消'],'confirm':['知道了']
    title:PropTypes.string,//
    contentHeight:PropTypes.number,//content的高度必须给定，不然无法实现动画。
    content:React.PropTypes.element,
  }

  static defaultProps = {
    successfunc:null,
    failfunc:null,
    bottomtype:'whether',
    title:'',
    contentHeight:80,
    content:'',
  }
 
  _showModal(){
    Animated.spring(
      this.state.changeValue,
      {
        toValue: 1,
        friction:20,
        tension:300,

      }
    ).start();
    this.setState({ isModalVisible: true });
  }
 
  _hideModal(bool){
      this.setState({ isModalVisible: false,changeValue:new Animated.Value(0) })
      if(bool==="yes"){
        this.props.successfunc&&this.props.successfunc();
      }else if(bool==="no"){
        this.props.failfunc&&this.props.failfunc();
      }
  }

  _renderBottom(){
    
    if(this.props.bottomtype === "confirm"){
      return(
      <View 
      style={styles.bottomlayout}
      >
        <TouchableOpacity 
        onPress={this._hideModal.bind(this,"yes")} 
        style={styles.comfirmbottom}
        >
          <Text style={styles.textcolor}>知道了</Text>
        </TouchableOpacity>
      </View>
      )
    }else if(this.props.bottomtype === "whether"){
      return(
      <View 
      style={styles.bottomlayout}
      >
        <TouchableOpacity 
        onPress={this._hideModal.bind(this,"no")}
        style={styles.button}
        >
          <Text>取消</Text>
        </TouchableOpacity>
        <View style={styles.partingline}></View>
        <TouchableOpacity 
        onPress={this._hideModal.bind(this,"yes")} 
        style={styles.button}
        >
          <Text style={styles.textcolor}>确认</Text>
        </TouchableOpacity>
      </View>
      )
    }

  }
 
  render () {
    let allheight=100+this.props.contentHeight 
    let changeValueheight= this.state.changeValue.interpolate({
      inputRange: [0, 1],
      outputRange: [allheight*.5,allheight],
    });
     let changeValuewidth= this.state.changeValue.interpolate({
      inputRange: [0, 1],
      outputRange: [deviceWidth*.8*.5,deviceWidth*.8],
    });
    return (
      <View>
        <TouchableOpacity onPress={this._showModal.bind(this)}>
          {this.props.children}
        </TouchableOpacity>
        <Modal 
        visible={this.state.isModalVisible}
        animationType={"none"}
        transparent={true}        
        onRequestClose={this._hideModal.bind(this)}
        >
          <View style={styles.layout}>
            <Animated.View 
            style={[styles.size,{height:changeValueheight,width:changeValuewidth,opacity:this.state.changeValue}]}
            >
              <View style={styles.toplayout}>
                <Text style={[styles.textcolor,styles.title]}>{this.props.title}</Text>
              </View>
              <View style={[styles.contentlayout,{height:this.props.contentHeight}]}>
                {this.props.content}
              </View>
              {this._renderBottom()}
            </Animated.View>
          </View>
          
        </Modal>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  layout:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:'rgba(0,0,0,0.5)'
  },
  size:{
    borderRadius:5,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#fff',
    overflow:'hidden',
  },
  textcolor:{
    color:'rgb(95,61,33)'
  },
  title:{
    fontSize:16,
  },
  toplayout:{
    borderTopRightRadius:5,
    borderTopLeftRadius:5,
    backgroundColor:'rgb(228,196,153)',
    height:50,
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
  },
  contentlayout:{
    backgroundColor:'rgb(239,239,239)',
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    padding:10,
    overflow:'hidden'
  },
  bottomlayout:{
    height:50,
    flexDirection:'row',
    borderTopWidth:1,
    borderColor:'rgb(193,193,193)'
  },
  button:{
    width:'50%',
    height:'100%',
    justifyContent:'center',
    alignItems:'center'
  },
  comfirmbottom:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  partingline:{
    borderLeftWidth:1,
    borderColor:'rgb(193,193,193)'
  }
})


