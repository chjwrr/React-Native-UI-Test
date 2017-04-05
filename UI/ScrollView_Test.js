/**
 * Created by mymac on 2017/4/1.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    ScrollView,
    TouchableHighlight,
} from 'react-native';

/*

 horizontal bool

 当此属性为true的时候，所有的子视图会在水平方向上排成一行，而不是默认的在垂直方向上排成一列。默认值为false。

 keyboardDismissMode enum('none', "interactive", 'on-drag')

 用户拖拽滚动视图的时候，是否要隐藏软键盘。

 none（默认值），拖拽时不隐藏软键盘。

 on-drag 当拖拽开始的时候隐藏软键盘。

 interactive 软键盘伴随拖拽操作同步地消失，并且如果往上滑动会恢复键盘。安卓设备上不支持这个选项，会表现的和none一样。

 keyboardShouldPersistTaps enum('always', 'never', 'handled', false, true)

 如果当前界面有软键盘，那么点击scrollview后是否收起键盘，取决于本属性的设置。（译注：很多人反应TextInput无法自动失去焦点/需要点击多次切换到其他组件等等问题，其关键都是需要将TextInput放到ScrollView中再设置本属性）

 'never'（默认值），点击TextInput以外的子组件会使当前的软键盘收起。此时子元素不会收到点击事件。
 'always'，键盘不会自动收起，ScrollView也不会捕捉点击事件，但子组件可以捕获。
 'handled'，当点击事件被子组件捕获时，键盘不会自动收起。这样切换TextInput时键盘可以保持状态。多数带有TextInput的情况下你应该选择此项。
 false，已过期，请使用'never'代替。
 true，已过期，请使用'always'代替。
 onContentSizeChange function

 此函数会在ScrollView内部可滚动内容的视图发生变化时调用。

 调用参数为内容视图的宽和高: (contentWidth, contentHeight)

 此方法是通过绑定在内容容器上的onLayout来实现的。

 onScroll function

 在滚动的过程中，每帧最多调用一次此回调函数。调用的频率可以用scrollEventThrottle属性来控制。

 refreshControl element

 指定RefreshControl组件，用于为ScrollView提供下拉刷新功能。

 removeClippedSubviews bool

 （实验特性）：当此属性为true时，屏幕之外的子视图（子视图的overflow样式需要设为hidden）会被移除。这个可以提升大列表的滚动性能。默认值为true。

 showsHorizontalScrollIndicator bool

 当此属性为true的时候，显示一个水平方向的滚动条。

 showsVerticalScrollIndicator bool

 当此属性为true的时候，显示一个垂直方向的滚动条。


 pagingEnabled bool

 当值为true时，滚动条会停在滚动视图的尺寸的整数倍位置。这个可以用在水平分页上。默认值为false。

 scrollEnabled bool

 当值为false的时候，内容不能滚动，默认值为true。
 */

/*
 scrollTo(y: number | { x?: number, y?: number, animated?: boolean }, x: number, animated: boolean)

 滚动到指定的x, y偏移处。第三个参数为是否启用平滑滚动动画。

 使用示例:

 scrollTo({x: 0, y: 0, animated: true})

 scrollToEnd(options?)

 滚动到视图底部（水平方向的视图则滚动到最右边）。

 加上动画参数 scrollToEnd({animated: true})则启用平滑滚动动画，或是调用 scrollToEnd({animated: false})来立即跳转。如果不使用参数，则animated选项默认启用。
*/

export default class ScrollView_Test extends Component {

    constructor(props){
        super(props);
    }


    render() {
        return(

            <ScrollView style={ScrollViewStyle.scrollStyle}
            keyboardDismissMode={'on-drag'}
                        keyboardShouldPersistTaps={'never'}
                        onScroll={() => {console.log('scrollview正在滚动')}}
                        ref='_scrollView'
            >



                <View style={ScrollViewStyle.viewStyle}>

                </View>
                <TouchableHighlight
                    onPress={ () => {
                        let scroll = this.refs._scrollView;
                        scroll.scrollToEnd({animated:true})
                    }}

                >
                    <Text style={{textAlign:'center'}}>点击我滚动到底部</Text>


                </TouchableHighlight>

                <View style={ScrollViewStyle.view1Style}>

                </View>


                <View style={ScrollViewStyle.view2Style}>

                </View>


                <View style={ScrollViewStyle.view3Style}>

                </View>


                <View style={ScrollViewStyle.view4Style}>

                </View>

                <TouchableHighlight
                    onPress={ () => {
                        let scroll = this.refs._scrollView;

                        scroll.scrollTo({x: 0, y: 200, animated: true});

                    }}

                >
                    <Text style={{textAlign:'center'}}>点击我</Text>


                </TouchableHighlight>


            </ScrollView>


        );
    }
}

let ScrollViewStyle = StyleSheet.create({

    scrollStyle:{
        backgroundColor:'green',
    },

    viewStyle:{
        marginTop:20,
        marginHorizontal:10,
        height:80,
        backgroundColor:'red',
    },
    view1Style:{
        marginTop:10,
        marginHorizontal:40,
        height:40,
        backgroundColor:'blue',
    },
    view2Style:{
        marginTop:10,
        marginHorizontal:20,
        height:200,
        backgroundColor:'yellow',
    },
    view3Style:{
        marginTop:10,
        marginHorizontal:50,
        height:300,
        backgroundColor:'white',
    },
    view4Style:{
        marginTop:10,
        marginHorizontal:50,
        height:100,
        backgroundColor:'black',
    },

})

AppRegistry.registerComponent('MyReactNativeUITest', () => ScrollView_Test);
