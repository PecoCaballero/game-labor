import React, { Component } from 'react';
import { View, Button } from 'native-base';
import { Text, StyleSheet, ImageBackground, BackHandler, ToastAndroid } from 'react-native'
import Desk from './images/desk.png'
import officeStyles from './css/office-styles'


class OfficePage extends Component {
    state = {}
    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#fef500'
        },
        headerLeft: null
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    }

    handleBackButton = () => {
        ToastAndroid.show('Para voltar: logout', ToastAndroid.SHORT);
        return true;
    }

    render() {
        let { navigate } = this.props.navigation
        return (
            <View style={officeStyles.container}>
                <ImageBackground source={Desk} style={{ marginTop: 30, width: '100%', height: '100%' }}>
                    <View style={officeStyles.buttonContainer}>
                        <Button style={officeStyles.phoneButton} transparent onPress={() => navigate("FeedEmpresas")}></Button>
                        <Button style={officeStyles.profileButton} transparent onPress={() => navigate("Profile")}></Button>
                    </View>
                </ImageBackground>
            </View>);
    }
}


export default OfficePage;