/**
 * Created by mymac on 2017/4/1.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Slider,
} from 'react-native';


/*
*
*disabled bool

 如果为true，用户就不能移动滑块。默认为false。

 iosmaximumTrackImage Image.propTypes.source

 指定一个滑块右侧轨道背景图。仅支持静态图片。图片最左边的像素会被平铺直至填满轨道。

 maximumTrackTintColor string

 滑块右侧轨道的颜色。默认为一个蓝色的渐变色。

 iosmaximumValue number

 滑块的最大值（当滑块滑到最右端时表示的值）。默认为1。

 iosminimumTrackImage Image.propTypes.source

 指定一个滑块左侧轨道背景图。仅支持静态图片。图片最右边的像素会被平铺直至填满轨道。

 minimumTrackTintColor string

 滑块左侧轨道的颜色。默认为一个蓝色的渐变色。

 iosminimumValue number

 滑块的最小值（当滑块滑到最左侧时表示的值）。默认为0。

 onSlidingComplete function

 用户结束滑动的时候调用此回调。

 onValueChange function

 在用户拖动滑块的过程中不断调用此回调。

 step number

 滑块的最小步长。这个值应该在0到(maximumValue - minimumValue)之间。默认值为0。

 style View#style

 thumbImage Image.propTypes.source

 给滑块设置一张图片。只支持静态图片。


 androidthumbTintColor ColorPropType

 Color of the foreground switch grip.


 trackImage Image.propTypes.source

 给轨道设置一张背景图。只支持静态图片。图片最中央的像素会被平铺直至填满轨道。

 value number

 滑块的初始值。这个值应该在最小值和最大值之间。默认值是0。

 这不是一个受约束的组件。也就是说，如果你不更新值，在用户操作后，这个组件也不会还原到初始值。


 *
*
* */

export default class Slider_Test extends Component {
    render() {
        return (
            <View style={{flex:1}}>

                <Slider
                disabled={false}
                maximumTrackTintColor={'red'}
                minimumTrackTintColor={'blue'}
                onSlidingComplete={() => {alert('滑动结束')}}
                onValueChange={ (value) => {console.log(value)}}


                ></Slider>

            </View>
        );
    }
}


AppRegistry.registerComponent('MyReactNativeUITest', () => Slider_Test);
