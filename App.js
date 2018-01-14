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

import SideMenu from 'react-native-side-menu';
import List from './src/components/List';
import Slider from './src/components/Slider';
import Header from './src/components/Header';
import Menu from './src/components/Menu';

export default class App extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <SideMenu
                    style={{backgroundColor:'#000000'}}
                    menu={<Menu/>}
                    isOpen={this.state.isOpen}
                    onChange={(isOpen) => this.updateMenu(isOpen)}
                >
                    <View style={[styles.container, {flex: 1}]}>
                        <Header toggle={this.toggle.bind(this)}/>
                        <Slider/>
                        <List/>
                    </View>
                </SideMenu>
            </View>
        );
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    updateMenu(isOpen) {
        this.setState({isOpen});
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black'
    }
});
