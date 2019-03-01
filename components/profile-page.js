import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Thumbnail, Header, Button, Icon, Left, Body, Title } from 'native-base'
import Pessoa from './images/pessoa2.jpg'
import Java from './images/java_logo.png'
import profileStyles from "./css/profile-styles"

class ProfilePage extends Component {
    state = {}
    static navigationOptions = {
        title: 'Profile',
        headerStyle: {
            backgroundColor: '#fef500'
        }
    }

    render() {
        var { navigate } = this.props
        return (
            <View style={profileStyles.container}>
                <View style={profileStyles.topContainer}>
                    <Thumbnail style={profileStyles.thumbnailProfile} large source={Pessoa} />
                    <View style={profileStyles.nameCarrerContainer} >
                        <Text style={profileStyles.name}>Maria da Silva</Text><Text style={profileStyles.carrer}>Desenvolvedor Mobile</Text>
                    </View>
                </View>
                <View style={profileStyles.bottomContainer}>
                    <View style={profileStyles.achievementsContainer}>
                        <View style={profileStyles.box}>
                            <Text style={profileStyles.achievementsText}>CONQUISTAS RECENTES</Text></View>
                        <View style={profileStyles.skillContainer}>
                            <Thumbnail source={Java} />
                            <Text style={{ color: "#ffffff" }}> Nível 5</Text>
                        </View>
                    </View>
                    <View style={profileStyles.formerJobsContainer}>
                    <Text style={profileStyles.achievementsText}>Recomendado para você</Text>
                    </View>

                    <View style={profileStyles.formerJobs}>
                    <Button iconLeft light style={profileStyles.arrowLeft}>
                        <Icon name='arrow-back' />
                    </Button>
                    <View style={profileStyles.texto}>
                        <Text>Desenvolvedor Java</Text>
                    </View>
                    <Button iconRight style={profileStyles.arrowRight} bordered>
                        <Icon name='arrow-forward' />
                    </Button>
                    </View>
                    
                </View>
            </View >);
    }
}





export default ProfilePage;