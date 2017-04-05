import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View
} from 'react-native';

export default class MyReactNativeUITest extends Component {
    render() {
        return (
            <View style={{flex:1}}>

            </View>
        );
    }
}


AppRegistry.registerComponent('MyReactNativeUITest', () => MyReactNativeUITest);
