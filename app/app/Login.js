import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import HWHeader from '../component/HWHeader'

class LoginPage extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Login',
        header: null
    });
    render() {
        return (
            <View style={styles.container}>
                <HWHeader title='hello' navigation={this.props.navigation} />
                <Text style={styles.welcome}>LoginPage</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});
export default LoginPage