import React,{Component,PropTypes} from 'react';
import {
  View,
  Animated,
  TouchableWithoutFeedback
} from 'react-native';

export default class Switch extends Component{

  static propTypes={
    size:PropTypes.number,
    defaultValue:PropTypes.bool,
    callback:PropTypes.func,
  }

  static defaultProps = {
    size:30,
    defaultValue:true,
    callback:null,
  }

  constructor(props){
    super(props);
    this.state = {
      value:this.props.defaultValue,
      changeValue:new Animated.Value(this.props.defaultValue?1:0)
    }
  }

  _change(){
    if(this.state.value){
      Animated.timing(
      this.state.changeValue,
      {
        toValue: 0, 
        duration: 100,
      }
    ).start(()=>{this.setState({value:false});this.props.callback&&this.props.callback(this.state.value)});
  }else{
      Animated.timing(
      this.state.changeValue,
      {
        toValue: 1, 
        duration: 100,
      }
    ).start(()=>{this.setState({value:true});this.props.callback&&this.props.callback(this.state.value)});
    }
    
  }
  render(){
    const {
      size
    } = this.props
    let circleSize = size-2;
    let layoutSize = (size/3)*5;
    let moveValue= this.state.changeValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0,layoutSize-size],
    });
    let changeStyle = this.state.value?{backgroundColor:'green',borderWidth:1,borderColor:"green"}:{backgroundColor:'#eee',borderWidth:1,borderColor:"rgb(193,193,193)"};
    return(
    <TouchableWithoutFeedback
      onPress={this._change.bind(this)}
      
    >
    <View style={[{borderRadius:size/2,height:size,width:layoutSize},changeStyle]}>
      <Animated.View style={{backgroundColor:"#fff",top:0,height:circleSize,width:circleSize,borderRadius:circleSize/2,shadowOffset:{height:2,width:0}, shadowColor:'black', shadowOpacity:0.2, shadowRadius:1,left:moveValue}}>
      </Animated.View>
    </View>
    </TouchableWithoutFeedback>
 

    
    )
  }
}