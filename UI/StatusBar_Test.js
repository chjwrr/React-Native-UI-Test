/**
 * Created by mymac on 2017/4/1.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    StatusBar
} from 'react-native';

/*
 animated bool

 指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden。

 hidden bool

 是否隐藏状态栏。

 androidbackgroundColor color

 状态栏的背景色。

 androidtranslucent bool

 指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。

 barStyle enum('default', 'light-content', 'dark-content')

 设置状态栏文本的颜色。

 iosnetworkActivityIndicatorVisible bool

 指定是否显示网络活动提示符。

 iosshowHideTransition enum('fade', 'slide')

 通过hidden属性来显示或隐藏状态栏时所使用的动画效果。默认值为'fade'。

 与Navigator搭配的用法
 StatusBar组件可以同时加载多个。此时属性会按照加载顺序合并（后者覆盖前者）。一个典型的用法就是在使用Navigator时，针对不同的路由指定不同的状态栏样式，如下：

 <View>
 <StatusBar
 backgroundColor="blue"
 barStyle="light-content"
 />
 <Navigator
 initialRoute={{statusBarHidden: true}}
 renderScene={(route, navigator) =>
 <View>
 <StatusBar hidden={route.statusBarHidden} />
 ...
 </View>
 }
 />
 </View>
 */

export default class StatusBar_Test extends Component {
    render() {
        return (
            <View style={{flex:1}}>


                <StatusBar
                backgroundColor={'red'}
                barStyle={'default'}


                ></StatusBar>

            </View>
        );
    }
}


AppRegistry.registerComponent('MyReactNativeUITest', () => StatusBar_Test);
