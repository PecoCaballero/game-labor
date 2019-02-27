import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'

import Index from './components'
import LoginPage from './components/login-page'
import ProfilePage from './components/profile-page'


export default class App extends React.Component {

  updateStacker = () => { }

  render() {
    return (
      <View style={styles.container}>
        <ProfilePage />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#414246',
    height: '100%'
  },
});
