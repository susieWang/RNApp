
import React, { Component, PropTypes } from 'react';

import {
	StyleSheet,
	View,
	TouchableOpacity,
	Text,
	Animated,
	Dimensions
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import hyTabBarStyle from './styles/hyTabBar';
const width = Dimensions.get('window').width;

class HWTabBar extends Component {

	static propTypes = {
		goToPage: PropTypes.func, // 跳转到对应tab的方法
		activeTab: PropTypes.number, // 当前被选中的tab下标
		tabs: PropTypes.array, // 所有tabs集合
		tabNames: PropTypes.array // 保存Tab名称
	}

	static defaultProps = {
		tabIconNames: []
	}

	setAnimationValue({ value }) {
		console.log(value);
	}

	componentDidMount() {
		// Animated.Value监听范围 [0, tab数量-1]
		this.props.scrollValue.addListener(this.setAnimationValue);
	}

	_renderIcon(i, color) {
		if (this.props.tabIconNames[i]) {
			return (
				<Icon
					name={this.props.tabIconNames[i]} // 图标
					size={this.props.iconSize || 15}
					color={color} />
			)
		}
	}

	renderTabOption(tab, i) {
		let color = this.props.activeTab == i ? "rgb(208,162,57)" : "rgb(147,147,147)"; // 判断i是否是当前选中的tab，设置不同的颜色
		let fontSize = this.props.fontSize || 15
		let backgroundColor = this.props.backgroundColor || '#fff'
		return (
			<TouchableOpacity
				key={i}
				onPress={() => this.props.goToPage(i)}
				style={[hyTabBarStyle.tab, {backgroundColor: backgroundColor}]}
			>
				<View style={hyTabBarStyle.tabItem}>
					{this._renderIcon(i, color)}
					<Text style={{ color: color, fontSize: fontSize}} >
						{this.props.tabNames[i]}
					</Text>
				</View>
			</TouchableOpacity>
		);
	}

	render() {
		const left = this.props.scrollValue.interpolate({
			inputRange: [0, 1,], outputRange: [0, width / this.props.tabNames.length,],
		});
		let tabWidth = this.props.underline ? this.props.activeTab  * (width /this.props.tabNames.length) : 0
		let backgroundColor = this.props.backgroundColor || '#fff'
		let tabUnderlineStyle = this.props.underline ? hyTabBarStyle.tabUnderlineStyle : hyTabBarStyle.noUnderLineStyle
		return (
			<View style={[hyTabBarStyle.tabs, {backgroundColor: backgroundColor}]}>
				{this.props.tabs.map((tab, i) => this.renderTabOption(tab, i))}
				<Animated.View style={[tabUnderlineStyle, { left: tabWidth}]} />
			</View>
		);
	}
}


export default HWTabBar;