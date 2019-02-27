import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import GameLabor from './images/Game-Labor-twice.png'
import ButtonBody from './buttons-body'

class Index extends Component {
    state = {}

    render() {
        return (<View style={styles.container} ><View style={styles.gameLabor} ><Image style={{ width: 300, height: 200 }} source={GameLabor}></Image></View>
            <View style={styles.buttons}><ButtonBody /></View></View>);
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    gameLabor: {
        flex: 1,
        margin: 50,
    },
    buttons: {
        flex: 2,
        marginTop: 250
    }
});


export default Index;