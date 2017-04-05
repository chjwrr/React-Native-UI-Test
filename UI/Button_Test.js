/**
 * Created by mymac on 2017/4/1.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Button,
    Alert,
} from 'react-native';

/*
* 一个简单的跨平台的按钮组件。可以进行一些简单的定制。
*/

/*
 accessibilityLabel string

 用于给残障人士显示的文本（比如读屏器软件可能会读取这一内容）

 color color

 文本的颜色(iOS)，或是按钮的背景色(Android)

 disabled bool

 设置为true时此按钮将不可点击

 onPress function

 用户点击此按钮时所调用的处理函数

 title string

 按钮内显示的文本
 */

export default class Button_Test extends Component {
    render() {
        return (
            <View style={Button_TestStyle.viewStyle}>

                <Button onPress={() => {
                    Alert.alert('title','message',[{text:'btn1',onPress:() => {alert('点击了第一个按钮')}},{text:'btn2',onPress:() => {alert('点击了第二个按钮')}},{text:'btn3',onPress:() => {alert('点击了第三个按钮')}}])

                    }}
                        title='button'
                        color='red'
                        disabled={false}
                >

                </Button>

            </View>
        );
    }
}
let Button_TestStyle = StyleSheet.create({
    viewStyle:{
        backgroundColor:'yellow',
        marginTop:30,
    }
})


AppRegistry.registerComponent('MyReactNativeUITest', () => Button_Test);
