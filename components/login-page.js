import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Input, Label, Item, Button } from 'native-base'

class LoginPage extends Component {
    state = {}
    render() {
        return (<View style={styles.container}>
            <Text style={styles.titleText}>Login</Text>
            <View style={styles.inputContainer}>
                <TouchableOpacity style={{ height: 50, width: 200 }}>
                    <Input style={styles.inputUsername} placeholder='Username'></Input>
                </TouchableOpacity>
                <TouchableOpacity style={{ height: 50, width: 200 }}>
                    <Input secureTextEntry={true} style={styles.inputPassword} placeholder='Senha'></Input>
                </TouchableOpacity>
                <TouchableOpacity style={{ height: 50, width: 200 }}>
                    <Button style={styles.buttonLogin} title="Login"><Text style={styles.buttonText}>Login</Text></Button>
                </TouchableOpacity>
            </View ></View>);
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 200,
        marginBottom: 600,
    },
    inputContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 200
    },
    inputUsername: {
        flex: 1,
        backgroundColor: '#ffffff',
        borderRadius: 10,
    },
    inputPassword: {
        flex: 2,
        backgroundColor: '#ffffff',
        borderRadius: 10
    },
    buttonLogin: {
        width: 200,
        borderRadius: 10,
        backgroundColor: "#fef500"
    },
    buttonText: {
        color: "#000000",
        marginLeft: 60,
        fontSize: 30
    },
    titleText: {
        color: '#fef500',
        fontSize: 80,
        marginBottom: 50
    }
})

export default LoginPage;