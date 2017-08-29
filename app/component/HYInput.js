'use strict';
import React, { Component ,  PropTypes} from 'react';
import { StyleSheet, View, Animated, Platform } from 'react-native';

const DEFAULT_PLACEHOLDER_COLOR = '#C7C7CD';
const DEFAULT_LABEL_COLOR = 'rgb(47,33,20)';
const DEFAULT_LABEL_ERROR_COLOR = '#C5270E';

export default class HYInput extends Component {
    
    static propTypes = {
        ...View.propTypes,//把View的属性展开，传递给TextInputLayout组件，给予它布局的能力。
        hintColor: PropTypes.string,//placeholder的颜色
        errorColor: PropTypes.string,//error当输入框内内容检查不符合的时候的颜色。
        focusColor: PropTypes.string,//当input聚焦的时候的颜色。
        labelFontSize: PropTypes.number,//label的字体大小，这个是在input上方的字体的大小。
        labelText: PropTypes.string,//label字体的内容。
        checkValid: PropTypes.func//检查函数
    };
    static defaultProps = {//默认属性值
        hintColor: DEFAULT_PLACEHOLDER_COLOR,
        errorColor: DEFAULT_LABEL_ERROR_COLOR,
        focusColor: DEFAULT_LABEL_COLOR,
        labelFontSize: 12,
        labelText: undefined,
        checkValid: undefined
    };
    constructor (props) {
        super(props);
        this._onBlur = this._onBlur.bind(this);
        this._onFocus = this._onFocus.bind(this);
        this._onChangeText = this._onChangeText.bind(this);

        this.state = {//组件初识状态，
            showLabel: false,
            labelAnimationValue: new Animated.Value(0),
            isFocused: false,
            isError: false
        }
    
        this._handleChildren(props);
    }

    componentWillReceiveProps (nextProps) {
        this._handleChildren(nextProps);
    }

    componentWillUpdate (nextProps, nextState) {
        if (nextState.showLabel !== this.state.showLabel) {
            this._springValue(this.state.labelAnimationValue, nextState.showLabel ? 1 : 0)
        }
    }

    _springValue (animatedValue, toValue) {
        Animated.spring(animatedValue, {
            toValue: toValue,
            friction: 10
        }).start();
    }

    // /**
    //  * font, size, color, gravity, hintColor
    //  * @param props
    //  * @private
    //  */
    _handleChildren (props) {
        let edtChild = React.Children.only(props.children);//当且仅当React可以创建一个
        this._oriEdtChild = edtChild;
        this._oriEdtStyle = StyleSheet.flatten([edtChild.props.style])//flatten可以用于连接两种或几种样式，去这几种样式的并集。（相同样式会被后面的样式覆盖）
        this._oriOnFocus = edtChild.props.onFocus;//把child的聚焦事件绑定在this上
        this._oriOnBlur = edtChild.props.onBlur;
        this._oriOnChangeText = edtChild.props.onChangeText;
        const textValue = edtChild.props.value || edtChild.props.defaultValue;
        if (textValue) {
            this._edtText = textValue;
            this.state.showLabel = true;
            this.state.labelAnimationValue = new Animated.Value(1);
        }
        this._edtChild = React.cloneElement(edtChild, {
            onFocus: this._onFocus,
            onBlur: this._onBlur,
            onChangeText: this._onChangeText,
            style: [edtChild.props.style, {
                backgroundColor: 'transparent',
                textAlignVertical: 'center',
                textAlign: 'left',
                padding: 0
            }],//
            placeholder: null,
            underlineColorAndroid: 'transparent'//由于安卓的显示不同，安卓的input自带下划线，这里需要特别给定一下。
        });

        let {height, fontSize}= this._oriEdtStyle;
        let labelHeight = fontSize + 3;

        let labelTransY = this.state.labelAnimationValue.interpolate({//动画中的插值
            inputRange: [0, 1],
            outputRange: [height + labelHeight >> 1, labelHeight - this.props.labelFontSize]//右移一位表示的height+labelheight表示
            
        });

        let labelFontSize = this.state.labelAnimationValue.interpolate({//组件的动画其实很简单，动画就两个变化，一个是Y轴的升高，还有一个就是字体的变小。
            inputRange: [0, 1],
            outputRange: [fontSize, this.props.labelFontSize]
        });
        this._labelStyle = {//input的placeholder
            fontSize: labelFontSize,
            height: labelHeight,
            backgroundColor: 'transparent',
            transform: [{translateY: labelTransY}]
        };
    }

    _onFocus () {
        if (!this._edtText) this.setState({showLabel: true, isFocused: true});
        else this.setState({isFocused: true});
        this._oriOnFocus && this._oriOnFocus();//我们知道&&运算符在前面那个表达式为true的时候才会运行后面那个表达式，这里其实就是当前面的那个函数存在的时候运行这个函数。
    }

    _onBlur () {
        let isError = false;
        if (this.props.checkValid) isError = !this.props.checkValid(this._edtText);
        if (!this._edtText) this.setState({showLabel: false, isFocused: false, isError});
        else  this.setState({isFocused: false, isError});
        this._oriOnBlur && this._oriOnBlur();
    }

    _onChangeText (text) {
        this._edtText = text;
        if (this.props.checkValid) {//这里检查组件上面是是否存在内容检验，checkValid，如果存在的话就将这个checkValid
            let isError = !this.props.checkValid(this._edtText);
            if (this.state.isError !== isError) this.setState({isError});
        }
        this._oriOnChangeText && this._oriOnChangeText(text);
    }
//这里存在一个闪烁，如果input 的value存在，那个input默认不让其改变这个input的值了，但是这里可能会存在一个闪烁的情况，所以最好的情况就是在存在value的时候设置editable={false}属性
    render () {
        
        let {isFocused, isError}=this.state;
        let {errorColor, hintColor, focusColor}=this.props;
        let color = isError ? errorColor : (isFocused ? focusColor : hintColor);
        return (
            <View style={[{
                borderBottomWidth: isFocused ? 2 : 1,
                borderBottomColor: color
            }, this.props.style]}
            >
                <Animated.Text
                    style={[this._labelStyle, {color: color}]} >
                    {this.props.labelText || this._oriEdtChild.props.placeholder }
                </Animated.Text>
                {this._edtChild}
            </View>
        );
    }
}

