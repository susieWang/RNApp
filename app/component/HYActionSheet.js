// import React , {Component,PropTypes} from 'react';
// import {
//   View,
//   Modal,
//   TouchableOpacity,
//   Animated,
//   Dimensions,
//   Text
// } from 'react-native';

// const deviceHeight = Dimensions.get('window').height;
// const deviceWidth = Dimensions.get('window').width;

// export default class ActionSheet extends Component{

//   static propTypes = {
//     data:PropTypes.array.isRequired,
//   }

//   constructor(props){
//     super(props)
//     this.state = {
//       changeValue:new Animated.Value(0),
//       isModalVisible: false,
//     }
//   }

//   _showActionSheet(){
//     this.setState({ isModalVisible: true});
//     Animated.timing(
//       this.state.changeValue,
//       {
//         toValue: 1,
//         duration: 100, 
//       }
//     ).start();
//   }

//   _hideActionSheet(text){
    
//     Animated.timing(
//       this.state.changeValue,
//       {
//         toValue: 0, 
//         duration: 100,
//       }
//     ).start(()=>{this.setState({ isModalVisible: false});if(text)this.props.onchange(text);});

//   }

//   _renderItem(){
//     const {data} = this.props;
//     let list =[]
//     for(let i in data){
//         list.push(
//           <View key={i} style={{backgroundColor:'#fff',alignItems:'center',marginTop:-1}}>
//             <View style={{width:'96%',height:1,backgroundColor:'#eee'}}></View>
//             <TouchableOpacity 
//             style={{width:deviceWidth,height:50,backgroundColor:'#fff',justifyContent:'center',alignItems:'center'}}
//             activeOpacity={0.5}
//             onPress={this._hideActionSheet.bind(this,data[i])}
//             >
//               <Text style={{fontSize:20}}>{data[i]}</Text>
//             </TouchableOpacity>
//           </View>
//         )
//     }
//   return list;
// }

//   render(){
//     let changeValue= this.state.changeValue.interpolate({
//       inputRange: [0, 1],
//       outputRange: [-(this.props.data.length*50+5),0],
//     });

//     return(
//       <View>
//         <TouchableOpacity onPress={this._showActionSheet.bind(this)}>
//           {this.props.children}
//         </TouchableOpacity>
//         <Modal
//           visible={this.state.isModalVisible}
//           animationType={"none"}
//           transparent={true}
//           onRequestClose={() => {console.log("Modal has been closed.")}}
//         >
//           <View 
//             style={{flex:1,backgroundColor:'rgba(0,0,0,0.5)'}}
//           >
//             <Animated.View
//               style={{
//                 position:'absolute',
//                 bottom:changeValue,
//                 opacity:this.state.changeValue
//               }}
//             >
//               {this._renderItem()}
//               <View style={{backgroundColor:'#fff',marginTop:5}}>
//                 <TouchableOpacity 
//                 style={{width:deviceWidth,height:50,backgroundColor:'#fff',justifyContent:'center',alignItems:'center'}}
//                 activeOpacity={0.5}
//                 onPress={this._hideActionSheet.bind(this,'')}
//                 >
//                   <Text style={{fontSize:20}}>取消</Text>
//                 </TouchableOpacity>
//               </View>
//             </Animated.View>
//           </View>
//         </Modal>
//       </View>
//     )
//   }
// }






import React , {Component,PropTypes} from 'react';
import {
  View,
  Modal,
  TouchableOpacity,
  Animated,
  Dimensions,
  Text,
  InteractionManager
} from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default class ActionSheet extends Component{

  static propTypes = {
    data:PropTypes.array.isRequired,
    renderItem:PropTypes.func
  }

  static defaultProps = {
    renderItem:(item)=>{return item}
  }
  constructor(props){
    super(props)
    this.state = {
      changeValue:new Animated.Value(0),
      isModalVisible: false,
    }
    this.renderChildren(props);
  }

  _showActionSheet(){
    this.setState({ isModalVisible: true});
    Animated.timing(
      this.state.changeValue,
      {
        toValue: 1,
        duration: 100, 
      }
    ).start();
  }

  _hideActionSheet(text){
    
    // Animated.timing(
    //   this.state.changeValue,
    //   {
    //     toValue: 0,
    //     duration: 100,
    //   }
    // ).start(()=>{
    //     this.setState({ isModalVisible: false});
    //     if(text)this.props.onchange(text);
    // });
      Animated.timing(
          this.state.changeValue,
          {
              toValue: 0,
              duration: 100,
          }
      ).start();
      var self = this;
      InteractionManager.runAfterInteractions(()=>{
          self.setState({ isModalVisible: false});
          if(text)self.props.onchange(text);
      })

  }

  _renderItem(){
    let dataOld = this.props.data;
    let data = dataOld.map(this.props.renderItem);
    let list =[]
    for(let i in data){
        list.push(
          <View key={i} style={{backgroundColor:'#fff',alignItems:'center',marginTop:-1}}>
            <View style={{width:'96%',height:1,backgroundColor:'#eee'}}></View>
            <TouchableOpacity 
            style={{width:deviceWidth,height:50,backgroundColor:'#fff',justifyContent:'center',alignItems:'center'}}
            activeOpacity={0.5}
            onPress={this._hideActionSheet.bind(this,dataOld[i])}
            >
              <Text style={{fontSize:20}}>{data[i]}</Text>
            </TouchableOpacity>
          </View>
        )
    }
  return list;
}
componentWillReceiveProps (nextProps) {
    this.renderChildren(nextProps);
}

renderChildren(props){
  let edtChild = React.Children.only(props.children);
  this._edtChild = React.cloneElement(edtChild, {
    onPress:this._showActionSheet.bind(this)
  })
}
  render(){
    let changeValue= this.state.changeValue.interpolate({
      inputRange: [0, 1],
      outputRange: [-(this.props.data.length*50+5),0],
    });

    return(
      <View>
        {this._edtChild}
        <Modal
          visible={this.state.isModalVisible}
          animationType={"none"}
          transparent={true}
          onRequestClose={() => {}}
        >
          <View 
            style={{flex:1,backgroundColor:'rgba(0,0,0,0.5)'}}
          >
            <Animated.View
              style={{
                position:'absolute',
                bottom:changeValue,
                opacity:this.state.changeValue
              }}
            >
              {this._renderItem()}
              <View style={{backgroundColor:'#fff',marginTop:5}}>
                <TouchableOpacity 
                style={{width:deviceWidth,height:50,backgroundColor:'#fff',justifyContent:'center',alignItems:'center'}}
                activeOpacity={0.5}
                onPress={this._hideActionSheet.bind(this,'')}
                >
                  <Text style={{fontSize:20}}>取消</Text>
                </TouchableOpacity>
              </View>
            </Animated.View>
          </View>
        </Modal>
      </View>
    )
  }
}