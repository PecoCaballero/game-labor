import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Input, Label, Item, Button } from 'native-base'

class LoginPage extends Component {
    state = {}
    render() {
        return (<View style={styles.container}>
            <TouchableOpacity style={{ height: 50, width: 200 }}>
                <Input style={styles.inputUsername} placeholder='Username'></Input>
            </TouchableOpacity>
            <TouchableOpacity style={{ height: 50, width: 200 }}>
                <Input style={styles.inputPassword} placeholder='Senha'></Input>
            </TouchableOpacity>
            <TouchableOpacity style={{ height: 50, width: 200 }}>
                <Button style={styles.buttonLogin} title="Login" primary><Text style={styles.loginText}>Login</Text></Button>
            </TouchableOpacity>
        </View >);
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 300,
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
        borderRadius: 10
    },
    loginText: {
        color: "#2da6ff",
        marginRight: 35,
        marginLeft: 20,
        fontSize: 30
    }
})

export default LoginPage;