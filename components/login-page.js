import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Input, Label, Item, Button } from 'native-base'

class LoginPage extends Component {
    static navigationOptions = {
        title: 'Login',
        headerStyle: {
            backgroundColor: '#fef500'
        }
    }

    state = {}
    render() {
        let { navigate } = this.props.navigation
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
                    <Button style={styles.buttonLogin} onPress={() => navigate("Office")} title="Login"><Text style={styles.buttonText}>Login</Text></Button>
                </TouchableOpacity>
            </View ></View>);
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#414246',
        height: '100%',
        width: '100%',
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