/**
 * Created by mymac on 2017/4/1.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Modal,
    Text,
    TouchableOpacity,
    TouchableHighlight,
} from 'react-native';

/*
* animationType PropTypes.oneOf(['none', 'slide', 'fade']) #


 * */

export default class Modal_Test extends Component {
    constructor(props) {
        super(props);
        this.state = {modalVisible: false};
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    render() {
        return (
            <View style={{marginTop: 22}}>

                <TouchableHighlight onPress={() => {
          this.setModalVisible(true)
        }}>
                    <Text>Show Modal</Text>
                </TouchableHighlight>


                <Modal style={{backgroundColor:'red'}}
                    animationType={"fade"}
                    transparent={false}
                    visible={this.state.modalVisible}
                       onShow={() => {alert('Modal has been show')}}
                >
                    <View style={{marginTop: 22}}>
                        <View>
                            <Text>Hello World!</Text>

                            <TouchableHighlight onPress={() => {
              this.setModalVisible(!this.state.modalVisible)
            }}>
                                <Text>Hide Modal</Text>
                            </TouchableHighlight>

                        </View>
                    </View>
                </Modal>


            </View>
        );

    }
}


AppRegistry.registerComponent('MyReactNativeUITest', () => Modal_Test);
