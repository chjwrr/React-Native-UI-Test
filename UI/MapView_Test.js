/**
 * Created by mymac on 2017/4/1.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    MapView
} from 'react-native';

export default class MapView_Test extends Component {
    render() {
        return (

            <MapView
            onAnnotationPress={ () => {console.log('onAnnotationPress')}}
            onRegionChange={ () => {console.log('onRegionChange')}}
            onRegionChangeComplete={ () => {console.log('onRegionChangeComplete')}}
            region={{latitude: 35.77282278,longitude:103.18359375,latitudeDelta: 36.30959734,longitudeDelta:77.93702933}}
            >




            </MapView>


        );
    }
}


AppRegistry.registerComponent('MyReactNativeUITest', () => MapView_Test);
