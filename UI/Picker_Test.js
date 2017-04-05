/**
 * Created by mymac on 2017/4/1.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Picker,
} from 'react-native';

/*
* onValueChange function

 某一项被选中时执行此回调。调用时带有如下参数：

 itemValue: 被选中项的value属性
 itemPosition: 被选中项在picker中的索引位置



 selectedValue any

 默认选中的值。可以是字符串或整数。对应的是value  不是label

 style pickerStyleType


* */

export default class Picker_Test extends Component {
    constructor(props){
        super(props);
        this.state ={
            selectValue:'nh',
        }
    }
    render() {
        return (
            <View style={{flex:1}}>

                <Picker selectedValue={this.state.selectValue}
                onValueChange={(changeValue,itemPosition) => {alert('选中了'+itemPosition),this.setState({selectValue:changeValue})}}
                >

                    <Picker.Item label='你好' value='nh'></Picker.Item>
                    <Picker.Item label='他好' value='th'></Picker.Item>
                    <Picker.Item label='她好' value='tth'></Picker.Item>
                    <Picker.Item label='大家好' value='djh'></Picker.Item>

                </Picker>

            </View>
        );
    }
}


AppRegistry.registerComponent('MyReactNativeUITest', () => Picker_Test);
