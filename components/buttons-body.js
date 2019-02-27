import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Button } from 'native-base'
import BlueBlock from './images/blue-block.png'
import Blocks from './images/lego-blocks.png'

class ButtonsBody extends Component {
    state = {}
    render() {
        return (<View stle={styles.buttonsDiv}>
            <TouchableOpacity style={{ height: 70 }}>
                <Button style={styles.buttonPersons} bordered light>
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
        height: 500,
        width: 500
    },
    blockIcon: {
        height: 30,
        width: 30,
        marginLeft: 20
    },
    buttonText: {
        color: "#2da6ff",
        marginRight: 35,
        marginLeft: 20,
        fontSize: 30
    },
    buttonPersons: {
        flex: 1,
        width: 200
    },
    buttonCompany: {
        flex: 2,
        width: 200
    }
})

export default ButtonsBody;