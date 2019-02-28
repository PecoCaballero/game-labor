import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ToastAndroid } from 'react-native';
import { Input, Label, Item, Button } from 'native-base'
import GameLabor from './images/Game-Labor-twice.png'

class RegisterPage extends Component {
    static navigationOptions = {
        title: 'Registro',
        headerStyle: {
            backgroundColor: '#fef500'
        }
    }

    state = {}
    render() {
        var { navigate } = this.props.navigation
        return (
            <View style={styles.container}>
                <Item style={styles.inputUsername}>
                    <Input placeholder='E-mail'></Input>
                </Item>
                <Item style={styles.inputPassword}>
                    <Input secureTextEntry={true} placeholder='Senha'></Input>
                </Item>
                <Item style={styles.inputPassword}>
                    <Input secureTextEntry={true} placeholder='Confirme seu e-mail'></Input>
                </Item>
                <TouchableOpacity style={styles.buttonLogin}>
                    <Button title="Login" onPress={() => {
                        ToastAndroid.show('Bem Vindo ao Game Labor!', ToastAndroid.SHORT);
                        navigate("Office")
                    }} transparent ><Text style={styles.loginText}>REGISTRE-SE</Text></Button>
                </TouchableOpacity>
            </View >);
    }
}

const styles = StyleSheet.create({

    container: {
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        flexDirection: 'column',
        flexGrow: 1,
        backgroundColor: "#414246"

    },
    inputUsername: {
        display: 'flex',
        flexWrap: 'wrap',
        backgroundColor: '#ffffff',
        borderRadius: 10,
        width: "60%",
        height: "10%",
        padding: 10

    },
    inputPassword: {
        display: 'flex',
        flexWrap: 'wrap',
        backgroundColor: '#ffffff',
        borderRadius: 10,
        height: "10%",
        width: "60%",
        padding: 10,
        marginBottom: 50,
        marginTop: 20

    },
    buttonLogin: {
        width: "60%",
        borderRadius: 10,
        backgroundColor: "#fef500",
        alignItems: "center",
        justifyContent: "center"
    },
    loginText: {
        marginLeft: '19%',
        color: "#000000",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 30
    },
    titleText: {
        color: '#fef500',
        fontSize: 80,
        marginBottom: 50
    }
})

export default RegisterPage;