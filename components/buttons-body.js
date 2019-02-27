import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Button } from 'native-base'
import BlueBlock from './images/blue-block.png'
import Blocks from './images/lego-blocks.png'

class ButtonsBody extends Component {
    state = {}
    render() {
        return (<View stle={styles.buttonsDiv}><Button bordered light>
            <Image style={styles.blockIcon} source={BlueBlock} /><Text style={styles.buttonText}>Pessoa</Text></Button>
            <Button bordered light><Image style={styles.blockIcon} source={Blocks} /><Text style={styles.buttonText}>Empresa</Text></Button>
        </View>);
    }
}

const styles = StyleSheet.create({
    buttonsDiv: {
        margin: 100
    },
    blockIcon: {
        height: 30,
        width: 30
    },
    buttonText: {
        color: "#2da6ff"
    }
})

export default ButtonsBody;