/**
 * Created by mymac on 2017/4/1.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableHighlight
} from 'react-native';

/*
*
*
* autoCapitalize enum('none', 'sentences', 'words', 'characters')

 控制TextInput是否要自动将特定字符切换为大写：

 characters: 所有的字符。
 words: 每个单词的第一个字符。
 sentences: 每句话的第一个字符（默认）。
 none: 不自动切换任何字符为大写。
 autoCorrect bool

 如果为false，会关闭拼写自动修正。默认值是true。

 autoFocus bool

 如果为true，在componentDidMount后会获得焦点。默认值为false。

 blurOnSubmit bool

 如果为true，文本框会在提交的时候失焦。对于单行输入框默认值为true，多行则为false。注意：对于多行输入框来说，如果将blurOnSubmit设为true，则在按下回车键时就会失去焦点同时触发onSubmitEditing事件，而不会换行。

 caretHidden bool

 如果为true，则隐藏光标。默认值为false

 defaultValue string

 提供一个文本框中的初始值。当用户开始输入的时候，值就可以改变。

 在一些简单的使用情形下，如果你不想用监听消息然后更新value属性的方法来保持属性和状态同步的时候，就可以用defaultValue来代替。

 editable bool

 如果为false，文本框是不可编辑的。默认值为true。

 keyboardType enum("default", 'numeric', 'email-address', "ascii-capable", 'numbers-and-punctuation', 'url', 'number-pad', 'phone-pad', 'name-phone-pad', 'decimal-pad', 'twitter', 'web-search')

 决定弹出的何种软键盘的，譬如numeric（纯数字键盘）。

 这些值在所有平台都可用：

 default
 numeric
 email-address
 maxLength number

 限制文本框中最多的字符数。使用这个属性而不用JS逻辑去实现，可以避免闪烁的现象。

 multiline bool

 如果为true，文本框中可以输入多行文字。默认值为false。

 onBlur function

 当文本框失去焦点的时候调用此回调函数。

 onChange function

 当文本框内容变化时调用此回调函数。

 onChangeText function

 当文本框内容变化时调用此回调函数。改变后的文字内容会作为参数传递。

 onEndEditing function

 当文本输入结束后调用此回调函数。

 onFocus function

 当文本框获得焦点的时候调用此回调函数。

 onLayout function

 当组件挂载或者布局变化的时候调用，参数为{x, y, width, height}。

 onScroll function

 Invoked on content scroll with { nativeEvent: { contentOffset: { x, y } } }. May also contain other properties from ScrollEvent but on Android contentSize is not provided for performance reasons.

 onSelectionChange function

 Callback that is called when the text input selection is changed. This will be called with { nativeEvent: { selection: { start, end } } }.

 onSubmitEditing function

 此回调函数当软键盘的确定/提交按钮被按下的时候调用此函数。如果multiline={true}，此属性不可用。

 placeholder string

 如果没有任何文字输入，会显示此字符串。

 placeholderTextColor color

 占位字符串显示的文字颜色。

 iosreturnKeyType enum('done', 'go', 'next', 'search', 'send', 'none', 'previous', 'default', 'emergency-call', 'google', 'join', 'route', 'yahoo')

 决定“确定”按钮显示的内容。 On Android you can also use returnKeyLabel.

 Cross platform

 The following values work across platforms:

 done
 go
 next
 search
 send
 Android Only

 The following values work on Android only:

 none
 previous
 iOS Only

 The following values work on iOS only:

 default
 emergency-call
 google
 join
 route
 yahoo
 secureTextEntry bool

 如果为true，文本框会遮住之前输入的文字，这样类似密码之类的敏感文字可以更加安全。默认值为false。

 selectTextOnFocus bool

 如果为true，当获得焦点的时候，所有的文字都会被选中。

 selection {start: number, end: number}

 The start and end of the text input's selection. Set start and end to the same value to position the cursor.

 selectionColor color

 设置输入框高亮时的颜色（在iOS上还包括光标）

 style Text#style

 译注：这意味着本组件继承了所有Text的样式。

 value string

 文本框中的文字内容。

 TextInput是一个受约束的(Controlled)的组件，意味着如果提供了value属性，原生值会被强制与value属性保持一致。在大部分情况下这都工作的很好，不过有些情况下会导致一些闪烁现象——一个常见的原因就是通过不改变value来阻止用户进行编辑。如果你希望阻止用户输入，可以考虑设置editable={false}；如果你是希望限制输入的长度，可以考虑设置maxLength属性，这两个属性都不会导致闪烁。

 androiddisableFullscreenUI bool

 When false, if there is a small amount of space available around a text input (e.g. landscape orientation on a phone), the OS may choose to have the user edit the text inside of a full screen text input mode. When true, this feature is disabled and users will always edit the text directly inside of the text input. Defaults to false.

 androidinlineImageLeft string

 If defined, the provided image resource will be rendered on the left.

 androidinlineImagePadding number

 Padding between the inline image, if any, and the text input itself.

 androidreturnKeyLabel string

 Sets the return key to the label. Use it instead of returnKeyType.

 androidtextBreakStrategy enum('simple', 'highQuality', 'balanced')

 Set text break strategy on Android API Level 23+, possible values are simple, highQuality, balanced The default value is simple.

 iosclearButtonMode enum('never', 'while-editing', 'unless-editing', 'always')

 是否要在文本框右侧显示“清除”按钮。

 iosclearTextOnFocus bool

 如果为true，每次开始输入的时候都会清除文本框的内容。

 iosenablesReturnKeyAutomatically bool

 如果为true，键盘会在文本框内没有文字的时候禁用确认按钮。默认值为false。

 iosdataDetectorTypes enum('phoneNumber', 'link', 'address', 'calendarEvent', 'none', 'all'), [object Object]

 Determines the types of data converted to clickable URLs in the text input. Only valid if multiline={true} and editable={false}. By default no data types are detected.

 You can provide one type or an array of many types.

 Possible values for dataDetectorTypes are:

 'phoneNumber'
 'link'
 'address'
 'calendarEvent'
 'none'
 'all'
 ioskeyboardAppearance enum('default', 'light', 'dark')

 指定键盘的颜色。

 iosonKeyPress function

 当一个键被按下的时候调用此回调。传递给回调函数的参数为{ nativeEvent: { key: keyValue } }，其中keyValue即为被按下的键。会在onChange之前调用。

 iosselectionState DocumentSelectionState

 参见DocumentSelectionState.js，可以控制一个文档中哪段文字被选中的状态。

 androidnumberOfLines number

 设置输入框的行数。当multiline设置为true时使用它，可以占据对应的行数。

 androidunderlineColorAndroid string

 文本框的下划线颜色(译注：如果要去掉文本框的边框，请将此属性设为透明transparent)。

 iosspellCheck bool

 如果设置为false，则禁用拼写检查的样式（比如错误拼写的单词下的红线）。默认值继承自autoCorrect.

 方法
 isFocused(): boolean

 返回值表明当前输入框是否获得了焦点。

 clear()

 清空输入框的内容。

 */
export default class TextInput_Test extends Component {
    constructor(props) {
        super(props);
        this.state = { text: 'Useless Placeholder' };
    }



    render() {

        return (
           <View style={{flex:1,backgroundColor:'red',marginTop:20}}>

               <TextInput
                   style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                   onChangeText={(text) => this.setState({text})}
                   value={this.state.text}
                   ref="textFiled"
               />


               <TouchableHighlight onPress={ () => {

                   this.refs.textFiled.clear();
                   this.setState({
                       text:'hello',
                   });

               } }>

                   <Text style={{textAlign:'center'}}>

                       点击我，改变textInput的值

                   </Text>

               </TouchableHighlight>

               <TouchableHighlight style={{marginTop:40}} onPress={ () => {alert('点击了一个方法')}}>

                   <Text style={{textAlign:'center'}}>

                       点击我，调用一个方法

                   </Text>

               </TouchableHighlight>

           </View>
        );
    }
}


AppRegistry.registerComponent('MyReactNativeUITest', () => TextInput_Test);
