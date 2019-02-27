import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import GameLabor from './images/Game-Labor.png'
import ButtonBody from './buttons-body'

class Index extends Component {
    state = {}

    render() {
        return (<View><View><Image style={styles.gameLabor} source={GameLabor}></Image></View>
            <View><ButtonBody /></View></View>);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    gameLabor: {
        display: 'flex',
        alignContent: 'space-around',
        margin: 50,

    }
});

export default Index;