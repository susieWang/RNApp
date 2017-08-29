import React, { Component } from 'react';
import { Keyboard, TextInput, View, StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
//style
import keyborardStyle from '../styles/keyboard';

class Example extends Component {

    render() {
        return (
            <View style={keyborardStyle.container}>
            <KeyboardAwareScrollView >
                <View>
                    <TextInput
                        style={keyborardStyle.textInput}
                    />
                </View>
            </KeyboardAwareScrollView>
            <KeyboardAwareScrollView >
                <View >
                    <TextInput
                        style={keyborardStyle.textInput}
                    />
                </View>
            </KeyboardAwareScrollView>
            <KeyboardAwareScrollView >
                <View>
                    <TextInput
                        style={keyborardStyle.textInput}
                    />
                </View>
            </KeyboardAwareScrollView>
            </View>
        )
    }
}


module.exports = Example;