import React ,{Component,PropTypes} from 'react';
import {
  View,
  Animated,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/star';

export default class HYStar extends Component{

  static propTypes = {
    starMax:PropTypes.number,
    viewStyle:View.propTypes.style,
    width:PropTypes.number,
    height:PropTypes.number,
    value:PropTypes.number,
    selectStar:PropTypes.func,
  }
  static defaultProps = {
    width:240,
    height:40,
    value:0,
  }

  constructor(props){
    super(props);
    this.state = {
      value:props.value?props.value:0,
    }
  }

  _change(a){
    this.setState({value:a})
    // console.log(this.state.value)
    this.props.selectStar(a);
  }

  render(){
    let star = [];
    for(let i =0;i<this.state.value;i++){
      star.push(
        <TouchableOpacity
        key={i}
        onPress={this._change.bind(this,i+1)}
        style={styles.starempty}
        >
          <Icon name="star-full" size={40} style={{color:'yellow'}}></Icon>
        </TouchableOpacity>
      )
    }
    for(let i =this.state.value;i<this.props.starMax;i++){
      star.push(
        <TouchableOpacity
        key={i}
        onPress={this._change.bind(this,i+1)}
        style={styles.starempty}
        >
          <Icon name="star-empty" size={40} style={{color:'yellow'}}></Icon>
        </TouchableOpacity>)
    }
    
    return(
    <View style={[styles.container,this.props.viewStyle,{width:this.props.width,height:this.props.height}]}>
      {star}
    </View>
    )
  }

}

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  },
  starempty:{
   
    width:40,
    height:40
    
  }

})