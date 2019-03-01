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
                        <View style={profileStyles.achievementsView}>
                            <Text style={profileStyles.achievementsText}>CONQUISTAS </Text>
                            <Text style={profileStyles.achievementsText}>RECENTES</Text>
                        </View>
                        <View style={profileStyles.skillContainer}>
                            <Thumbnail source={Java} />
                            <Text style={{ color: "#ffffff" }}> Nível 5</Text>
                        </View>
                    </View>
                    <View style={profileStyles.formerJobsContainer}>
                        <View style={profileStyles.recommendedView}>
                            <Text style={profileStyles.achievementsText}>Recomendado para você</Text>
                        </View>
                        <View style={profileStyles.formerJobs}>
                            <View style={profileStyles.arrowView}>
                                <Button iconLeft transparent style={profileStyles.arrowLeft}>
                                    <Icon name='arrow-back' />
                                </Button>
                            </View>
                            <View style={profileStyles.slotText}>
                                <Text>Desenvolvedor Java</Text>
                                <Text>Decolar.com</Text>
                            </View>
                            <View style={profileStyles.arrowView}>
                                <Button iconRight style={profileStyles.arrowRight} transparent>
                                    <Icon name='arrow-forward' />
                                </Button>
                            </View>
                        </View>
                    </View>
                </View>
            </View >);
    }
}





export default ProfilePage;