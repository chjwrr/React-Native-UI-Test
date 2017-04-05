/**
 * Created by mymac on 2017/4/1.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    ListView,
    TouchableHighlight,
} from 'react-native';

import ListViewItem from './ListViewItem_Test'

export default class ListView_Test extends Component {

    constructor(props) {
        super(props);
        //其中提供给数据源的rowHasChanged函数可以告诉ListView它是否需要重绘一行数据
        // 即数据是否发生了改变，即在需要重绘界面的时候会进行判断
        // 如果之前页面中的改行数据没有发生变化，则不再进行重绘，否则进行重绘
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            //然后通过cloneWithRows方法为其传递一个数组
            dataSource: ds.cloneWithRows(this.getDataArray()),
        };
    }

    
    //初始化数组数据
    getDataArray () {
        var dataArray = [];
        
        for (let i = 0 ; i<10 ; i ++) {
            dataArray.push('row' + i);
        }
        
        return dataArray;
    }

    //子组件向父组件传值需要调用的方法
    onChildChanged (newState) {
    alert(newState);
    }


    //相当于iOS中的cell，返回一个视图布局
    _renderRow (rowData, sectionID,rowID){
        return (


        <ListViewItem rowData={rowData}
                      sectionID={sectionID}
                      rowID={rowID}
                      callbackParent={this.onChildChanged}/>
        );
        
    }



    //点击cell触发的方法
    selectCellAction(rowData, sectionID,rowID) {

        alert('rowID:'+rowID);
    }

    _renderSeparator(rowData, sectionID, rowID, highlightRow) {

        return(

            <View style={{backgroundColor:'red',height:1}}></View>

        )
    }

    render() {
        return (




            <ListView style={{flex:1}}
                dataSource={this.state.dataSource}
                renderRow={this._renderRow.bind(this)}
                      renderSeparator={this._renderSeparator.bind(this)}
            />


        );
    }
}


AppRegistry.registerComponent('MyReactNativeUITest', () => ListView_Test);
