import React,{Component,PropTypes} from 'react';
import {
  View,
  ScrollView,
  Dimensions
} from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default class HYHorizontal extends Component {
  constructor(props){
    super(props)
    this.state={

    }
    this.children=[]
  }

  static propTypes = {
    data:PropTypes.array.isRequired,
    renderItem:PropTypes.func.isRequired,
    ContentHeight:PropTypes.number,
    ContentStyle:View.propTypes.style,
    showsHorizontalScrollIndicator:PropTypes.bool,
  }

  static defaultProps = {
    showsHorizontalScrollIndicator:true,
    ContentHeight:120,
  }

  _renderItem(){
    
    this.children = this.props.data.map((item)=>{return this.props.renderItem(item)})
    console.log(this.children)
    return this.children;
  }
  render(){
    const {
      showsHorizontalScrollIndicator,
      ContentHeight,
      ContentStyle
    } = this.props;
    return(
      <View style={[{height:ContentHeight},ContentStyle]}>
      <ScrollView
        contentContainerStyle={{alignItems:'center',height:ContentHeight}}
        horizontal={true}
        showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
      >
        {this._renderItem()}
      </ScrollView>
      </View>

    )
  }
}