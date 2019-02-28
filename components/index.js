import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import GameLabor from './images/Game-Labor-twice.png'
import ButtonBody from './buttons-body'

class Index extends Component {
    state = {}
    static navigationOption = {
        title: 'First Screen'
    }

    render() {
        let { navigator } = this.props
        return (<View style={styles.container} ><View style={styles.gameLabor}><Image style={{ width: 300, height: 200 }} source={GameLabor}></Image></View>
            <View style={styles.buttons}><ButtonBody /></View></View>);
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    gameLabor: {
        flex: 1,
        marginTop: "15%",
    },
    buttons: {
        flex: 2,
        marginTop: "40%",
        width: "50%"
    }
});


export default Index;