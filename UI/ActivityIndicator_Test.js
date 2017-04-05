/**
 * Created by mymac on 2017/4/1.
 */



/*
*
* 显示一个圆形的loading提示符号。
*
 animating bool

 是否要显示指示器，默认为true，表示显示。

 color string

 滚轮的前景颜色（默认为灰色）。

 ios->hidesWhenStopped bool

 在没有动画的时候，是否要隐藏指示器（默认为true）。

 size enum('small', 'large')

 指示器的大小。small的高度为20，large为36。
 * */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    ActivityIndicator,
} from 'react-native';

export default class ActivityIndicator_Test extends Component {
    constructor(props){
        super(props);
        this.state = {
            isShowActivity:true,
        }
    }

    componentDidMount() {

        //3秒后停止Activity
        setInterval( () => {
            this.setState({
                isShowActivity:false,
            })
        },3000);

    }

    render() {
        return (
            <View style={{flex:1}}>

                <ActivityIndicator animating={this.state.isShowActivity}
                                   color={'red'}
                                   hidesWhenStopped={true}
                                   size={'large'}
                                   style={ActivityIndicator_TestStyle.ActivityIndicatorStyle}
                >


                </ActivityIndicator>



            </View>
        );
    }
}

let ActivityIndicator_TestStyle = StyleSheet.create({
    ActivityIndicatorStyle:{
        marginTop:30,
    }
})

AppRegistry.registerComponent('MyReactNativeUITest', () => ActivityIndicator_Test);
