import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { Button } from 'native-base'
import BlueBlock from './images/blue-block.png'
import Blocks from './images/lego-blocks.png'


class ButtonsBody extends Component {
    state = {}
    render() {
        let { navigate } = this.props
        return (
            <View style={styles.buttonsDiv}>
                <TouchableOpacity style={{ height: 70 }}>
                    <Button style={styles.buttonPersons} onPress={() => navigate("Login")} bordered light>
                        <Image style={styles.blockIcon} source={BlueBlock} /><Text style={styles.buttonText}>Pessoa</Text>
                    </Button>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginTop: 30, height: 70 }}>
                    <Button style={styles.buttonCompany} bordered light>
                        <Image style={styles.blockIcon} source={Blocks} /><Text style={styles.buttonText}>Empresa</Text>
                    </Button>
                </TouchableOpacity>
            </View >);
    }
}

const styles = StyleSheet.create({
    buttonsDiv: {
        display: 'flex', alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "column",
        marginTop: "5%",
        width: "100%",

    },
    blockIcon: {
        height: 30,
        width: 30,
        marginLeft: 20
    },
    buttonText: {
        color: "#FFFFFF",
        alignItems: "center",
        fontSize: 30
    },
    buttonPersons: {
        flex: 1,
        width: "100%",
        borderRadius: 30
    },
    buttonCompany: {
        flex: 2,
        width: "100%",
        borderRadius: 30
    }
})

export default ButtonsBody;