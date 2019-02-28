import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import GameLabor from './images/Game-Labor-twice.png'
import ButtonBody from './buttons-body'

class Index extends Component {
    state = {}
    static navigationOptions = {
        header: null
    }


    render() {
        var { navigate } = this.props.navigation
        return (<View style={styles.container} ><View style={styles.gameLabor}><Image style={{ width: 300, height: 200 }} source={GameLabor}></Image></View>
            <View style={styles.buttons}><ButtonBody navigate={navigate} /></View></View>);

    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#414246",
        width: "100%",
        height: "100%"
        
        
    },
    gameLabor: {
        flex: 1,
        marginTop: "15%",
    },
    buttons: {
        flex: 2,
        marginTop: "50%",
        width: "50%"
    }
});


export default Index;