/**
 * Created by mymac on 2017/4/1.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Image,
} from 'react-native';

/*
* 一个用于显示多种不同类型图片的React组件，包括网络图片、静态资源、临时的本地图片、以及本地磁盘上的图片（如相册）等
* */

/*
*
 onLayout function

 当元素挂载或者布局改变的时候调用，参数为：{nativeEvent: {layout: {x, y, width, height}}}.

 onLoad function

 加载成功完成时调用此回调函数。

 onLoadEnd function

 加载结束后，不论成功还是失败，调用此回调函数。

 onLoadStart function

 加载开始时调用。

 resizeMode enum('cover', 'contain', 'stretch', 'repeat', 'center')

 决定当组件尺寸和图片尺寸不成比例的时候如何调整图片的大小。

 cover: 在保持图片宽高比的前提下缩放图片，直到宽度和高度都大于等于容器视图的尺寸（如果容器有padding内衬的话，则相应减去）。译注：这样图片完全覆盖甚至超出容器，容器中不留任何空白。

 contain: 在保持图片宽高比的前提下缩放图片，直到宽度和高度都小于等于容器视图的尺寸（如果容器有padding内衬的话，则相应减去）。译注：这样图片完全被包裹在容器中，容器中可能留有空白

 stretch: 拉伸图片且不维持宽高比，直到宽高都刚好填满容器。

 repeat: 重复平铺图片直到填满容器。图片会维持原始尺寸。仅iOS可用。

 center: 居中不拉伸。

 source {uri: string}, number

 uri是一个表示图片的资源标识的字符串，它可以是一个http地址或是一个本地文件路径（使用require(相对路径)来引用）。

 style style

 布局Flexbox...

 阴影Shadow...

 动画变换Transforms...

 backfaceVisibility ReactPropTypes.oneOf(['visible', 'hidden'])

 resizeMode Object.keys(ImageResizeMode)

 backgroundColor color

 borderBottomLeftRadius ReactPropTypes.number

 borderBottomRightRadius ReactPropTypes.number

 borderColor color

 borderRadius number

 borderTopLeftRadius ReactPropTypes.number

 borderTopRightRadius ReactPropTypes.number

 borderWidth number

 overflow enum('visible', 'hidden')

 tintColor color
 为所有非透明的像素指定一个颜色

 opacity number

 androidoverlayColor ReactPropTypes.string
 当图片有圆角的时候，指定一个颜色用于填充圆角处的空白。虽然一般情况下圆角处是透明的，但在某些情况下，Android并不支持圆角透明，比如：

 某些resize模式比如'contain'
 GIF动画
 常见的用法就是在不能圆角透明时，设置overlayColor和背景色一致。

 详细说明可参考 http://frescolib.org/docs/rounded-corners-and-circles.html

 testID string

 一个唯一的资源标识符，用来在自动测试脚本中标识这个元素。

 androidresizeMethod enum('auto', 'resize', 'scale')

 当图片实际尺寸和容器样式尺寸不一致时，决定以怎样的策略来调整图片的尺寸。默认值为auto。

 auto：使用启发式算法来在resize和scale中自动决定。

 resize： 在图片解码之前，使用软件算法对其在内存中的数据进行修改。当图片尺寸比容器尺寸大得多时，应该优先使用此选项。

 scale：对图片进行缩放。和resize相比， scale速度更快（一般有硬件加速），而且图片质量更优。在图片尺寸比容器尺寸小或者只是稍大一点时，应该优先使用此选项。

 关于resize和scale的详细说明请参考http://frescolib.org/docs/resizing-rotating.html.

 iosaccessibilityLabel string

 当用户与图片交互时，读屏器（无障碍功能）会朗读的文字。

 iosaccessible bool

 当此属性为真的时候，表示这个图片是一个启用了无障碍功能的元素。

 iosblurRadius number

 blurRadius(模糊半径)：为图片添加一个指定半径的模糊滤镜。

 ioscapInsets {top: number, left: number, bottom: number, right: number}

 当图片被缩放的时候，capInsets指定的角上的尺寸会被固定而不进行缩放，而中间和边上其他的部分则会被拉伸。这在制作一些可变大小的圆角按钮、阴影、以及其它资源的时候非常有用（译注：这就是常说的九宫格或者.9图。了解更多信息，可以参见苹果官方文档

 iosdefaultSource {uri: string, width: number, height: number, scale: number}, number

 在读取图片时默认显示的加载提示图片

 uri - 是一个表示图片的资源标识的字符串，它可以是一个http地址或是一个本地文件路径（使用require(相对路径)来引用）。
 width, height - 如果你知道图片的尺寸，那么可以在这里指定。这一尺寸会被用作<Image/>组件的默认尺寸。
 scale - 图片的缩放系数。默认是1.0，意味着每一个图片像素都对应一个设备独立像素（DIP）。
 number - 本地图片引用语法require('./image.jpg')所返回的内部资源id。
 iosonError function

 当加载错误的时候调用此回调函数，参数为{nativeEvent: {error}}

 iosonPartialLoad function

 如果图片本身支持逐步加载，则逐步加载的过程中会调用此方法。“逐步加载”的具体定义与具体的标准和实现有关。

 iosonProgress function

 在加载过程中不断调用，参数为{nativeEvent: {loaded, total}}
* */

export default class Image_Test extends Component {

    render() {
        return (
            <View style={{flex:1 ,backgroundColor:'red'}}>

                <Image style={{width:300,height:224}} source={require('./Images/1.jpg')}></Image>

                <Image source={{uri:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1089399937,1684001946&fm=23&gp=0.jpg'}} style={{width: 200, height:80}}></Image>

            </View>
        );
    }
}


AppRegistry.registerComponent('MyReactNativeUITest', () => Image_Test);
