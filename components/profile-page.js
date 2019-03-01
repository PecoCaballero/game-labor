import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Thumbnail, Header, Button, Icon, Left, Body, Title } from 'native-base'
import Pessoa from './images/pessoa2.jpg'
import Java from './images/java_logo.png'
import profileStyles from "./css/profile-styles"

class ProfilePage extends Component {
    state = { current_slot: ['Desenvolvedor Java', 'Decolar.com'], vaga1: ['Desenvolvedor Java', 'Decolar.com'], vaga2: ['Desenvolvedor Mobile', 'Mercado Livre'], position: 0 }
    static navigationOptions = {
        title: 'Profile',
        headerStyle: {
            backgroundColor: '#fef500'
        }
    }

    handlePosistion = () => {
        let { vaga1, vaga2, current_slot } = this.state
        if (current_slot === vaga1) {
            this.setState({ current_slot: vaga2 })
        }
        else {
            this.setState({ current_slot: vaga1 })
        }
    }

    render() {
        var { navigate } = this.props
        let { current_slot } = this.state
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
                                <Button iconLeft onPress={this.handlePosistion} transparent style={profileStyles.arrowLeft}>
                                    <Icon name='arrow-back' />
                                </Button>
                            </View>
                            <View style={profileStyles.slotText}>
                                <Text>{current_slot[0]}</Text>
                                <Text>{current_slot[1]}</Text>
                            </View>
                            <View style={profileStyles.arrowView}>
                                <Button iconRight onPress={this.handlePosistion} style={profileStyles.arrowRight} transparent>
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