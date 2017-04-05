/**
 * Created by mymac on 2017/4/5.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

export default class ListViewItem_Test extends Component {

    setNativeProps(nativeProps) {
        this.refs._root.setNativeProps(nativeProps);
    }



    render() {

        const {rowData,sectionID,rowID} = this.props;

        return (
            <TouchableOpacity ref="_root"
                  style={ListViewItem_TestStyle.itemStyle}
                  onPress={() => {
                              this.props.callbackParent('你好啊');

                  }}>

                <Text>{'rowdata:'+this.props.rowData}</Text>
                <Text>{'sectionID:'+this.props.sectionID}</Text>
                <Text>{'rowID:'+this.props.rowID}</Text>

            </TouchableOpacity>
        );
    }
}

let ListViewItem_TestStyle =StyleSheet.create({

    itemStyle:{
        height:60,

    }
})


AppRegistry.registerComponent('MyReactNativeUITest', () => ListViewItem_Test);
