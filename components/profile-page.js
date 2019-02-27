import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Thumbnail, Header, Button, Icon, Left, Body, Title } from 'native-base'
import Pessoa from './images/pessoa2.jpg'
import Java from './images/java_logo.png'

class ProfilePage extends Component {
    state = {}
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Button style={styles.headerArrow}><Icon name='arrow-back'></Icon></Button>
                    <Text style={styles.pageTitle}>Profile</Text>
                </View>
                <View style={styles.topContainer}>
                    <Thumbnail style={styles.thumbnailProfile} large source={Pessoa} />
                    <View style={styles.nameCarrerContainer} >
                        <Text style={styles.name}>Maria da Silva</Text><Text style={styles.carrer}>Desenvolvedor Mobile</Text>
                    </View>
                </View>
                <View style={styles.bottomContainer}>
                    <View style={styles.achievementsContainer}>
                        <Text style={styles.achievementsText}>CONQUISTAS RECENTES</Text>
                        <View style={styles.skillContainer}>
                            <Thumbnail source={Java} />
                            <Text style={{ color: "#ffffff" }}> Nível 5</Text>
                        </View>
                    </View>
                    <View styles={styles.formerJobsContainer}>
                        <Text style={styles.achievementsText}>Posições Ocupadas</Text>
                        <View style={styles.formerJobs}>
                            <Text style={styles.formerJobsText}>Desenvolvedor Java</Text>
                            <Text style={styles.formerJobsText}>o jogo </Text>
                        </View>
                    </View>
                </View>
            </View >);
    }
}


const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#fef500',
        width: "100%",
        height: "10%"
    },
    headerArrow: {
        marginTop: '2%',
        marginRight: '18%',
        backgroundColor: '#414246',
        borderRadius: 50,
        height: '70%',
        width: "12%"
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    pageTitle: {
        color: '#414246',
        fontSize: 45,
        marginRight: '30%'
    },
    topContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        height: "20%",
        marginTop: '10%'
    },
    bottomContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '50%',
        width: '80%',
        borderRadius: 10,
        backgroundColor: '#bab9be',
        marginTop: "8%",

    },
    achievementsContainer: {
        padding: 10,
        height: '25%'
    },
    skillContainer: {
        marginTop: '2%',
        marginLeft: '4%',
        display: 'flex',
        justifyContent: 'center'
    },
    formerJobsContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        height: "25%",
        backgroundColor: '#ff0000',
        marginBottom: "25%"
    },
    formerJobs: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 200,
        backgroundColor: '#ffffff',
        height: "25%",
        width: "30%"
    },
    formerJobsText: {
        color: '#414246'
    },
    thumbnailProfile: {
        width: 90,
        height: 90,
    },
    name: {
        color: "#ffffff",
        fontSize: 25
    },
    carrer: {
        color: "#ffffff",
        fontSize: 20
    },
    nameCarrerContainer: {
        marginTop: 10,
        marginStart: 30,
        width: 200,
        borderStyle: "solid",
        borderColor: '#ffffff'
    },
    achievementsText: {
        color: '#ffffff',
        fontSize: 20
    }
})

export default ProfilePage;