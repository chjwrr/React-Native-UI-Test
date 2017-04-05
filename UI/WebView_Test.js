/**
 * Created by mymac on 2017/4/1.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    WebView
} from 'react-native';


/*

 iosallowsInlineMediaPlayback bool

 指定HTML5视频是在网页当前位置播放还是使用原生的全屏播放器播放。 默认值为false。

 注意 : 要让视频在网页中播放，不光要将这个属性设为true，HTML中的视频元素本身也需要包含webkit-playsinline属性。

 automaticallyAdjustContentInsets bool

 iosbounces bool

 contentInset {top: number, left: number, bottom: number, right: number}

 iosdataDetectorTypes enum('phoneNumber', 'link', 'address', 'calendarEvent', 'none', 'all'), [object Object]

 探测网页中某些特殊数据类型，自动生成可点击的链接，默认情况下仅允许探测电话号码。

 你可以指定探测下述类型中的一种，或者使用数组来指定多个类型。

 dataDetectorTypes的可选值：

 'phoneNumber'
 'link'
 'address'
 'calendarEvent'
 'none'
 'all'
 iosdecelerationRate ScrollView.propTypes.decelerationRate

 指定一个浮点数，用于设置在用户停止触摸之后，此视图应以多快的速度停止滚动。也可以指定预设的字符串值，如"normal"和"fast"，分别对应UIScrollViewDecelerationRateNormal 和UIScrollViewDecelerationRateFast。

 Normal（正常速度）: 0.998
 Fast（较快速度）: 0.9 (iOS WebView的默认值)
 androiddomStorageEnabled bool

 仅限Android平台。指定是否开启DOM本地存储。

 html string

 已过期
 请使用source 属性代替。

 injectedJavaScript string

 设置在网页加载之前注入的一段JS代码。

 mediaPlaybackRequiresUserAction bool

 设置页面中的HTML5音视频是否需要在用户点击后再开始播放。默认值为true.

 onError function

 加载失败时调用。

 onLoad function

 加载成功时调用。

 onLoadEnd function

 加载结束时（无论成功或失败）调用。

 onLoadStart function

 加载开始时调用。

 onMessage function

 在webview内部的网页中调用window.postMessage方法时可以触发此属性对应的函数，从而实现网页和RN之间的数据交换。 设置此属性的同时会在webview中注入一个postMessage的全局函数并覆盖可能已经存在的同名实现。

 网页端的window.postMessage只发送一个参数data，此参数封装在RN端的event对象中，即event.nativeEvent.data。data 只能是一个字符串。

 androidjavaScriptEnabled bool

 仅限Android平台。iOS平台JavaScript是默认开启的。

 onNavigationStateChange function

 iosonShouldStartLoadWithRequest function

 允许为webview发起的请求运行一个自定义的处理函数。返回true或false表示是否要继续执行响应的请求。

 renderError function

 设置一个函数，返回一个视图用于显示错误。

 renderLoading function

 设置一个函数，返回一个加载指示器。

 source {uri: string, method: string, headers: object, body: string}, {html: string, baseUrl: string}, number

 在WebView中载入一段静态的html代码或是一个url（还可以附带一些header选项）。

 scalesPageToFit bool

 设置是否要把网页缩放到适应视图的大小，以及是否允许用户改变缩放比例。

 iosscrollEnabled bool

 startInLoadingState bool

 强制WebView在第一次加载时先显示loading视图。默认为true。

 style View#style

 url string

 已过期
 请使用source 属性代替。

 androiduserAgent string

 为WebView设置user-agent字符串标识。这一字符串也可以在原生端用WebViewConfig来设置，但js端的设置会覆盖原生端的设置。


 * */
export default class WebView_Test extends Component {
    render() {
        return (
            <View style={{flex:1}}>

                <WebView
                    source={{uri:'https://www.baidu.com'}}
                    onError={() => {console.log('onerror')}}
                    onLoad={ () => {console.log('onLoad')}}
                    onLoadEnd={() => {console.log('onLoadEnd')}}
                    onLoadStart={() => {console.log('onLoadStart')}}
                    onMessage={ ()=> {console.log('onMessage')}}
                    scalesPageToFit={true}



                ></WebView>

            </View>
        );
    }
}


AppRegistry.registerComponent('MyReactNativeUITest', () => WebView_Test);
