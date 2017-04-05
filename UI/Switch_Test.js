/**
 * Created by mymac on 2017/4/1.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Switch
} from 'react-native';

/*
 disabled bool

 如果为true，这个组件不能进行交互。

 onValueChange function

 当值改变的时候调用此回调函数，参数为新的值。

 testID string

 用来在端到端测试中定位此视图。

 value bool

 表示此开关是否打开。默认为false（关闭状态）。

 onTintColor ColorPropType

 开启状态时的背景颜色。

 thumbTintColor ColorPropType

 开关上圆形按钮的背景颜色。

 tintColor ColorPropType

 关闭状态时的边框颜色(iOS)或背景颜色(Android)。
*
* 注意这是一个“受控组件”（controlled component）
* 你必须使用onValueChange回调来更新value属性以响应用户的操作。
* 如果不更新value属性，组件只会按一开始给定的value值来渲染且保持不变，看上去就像完全点不动。
* */

export default class Switch_Test extends Component {
    constructor(props){
        super(props);
        this.state={
            isSelect:false,
        }

    }

    render() {
        return (
            <View style={{flex:1}}>

                <Switch style={{marginTop:30}}
                onValueChange={(value) => {alert(value),this.setState({isSelect:value})}}
                onTintColor={'red'}
                tintColor={'blue'}
                value={this.state.isSelect}
                ></Switch>


            </View>
        );
    }
}


AppRegistry.registerComponent('MyReactNativeUITest', () => Switch_Test);
