/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View
} from 'react-native';

import List from './src/components/List';
import Slider from './src/components/Slider';

export default class App extends Component<{}> {
    render() {
        return (
            <View style={[styles.container, {flex: 1}]}>
                <Slider/>
                <List/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black'
    }
});
