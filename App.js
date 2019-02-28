import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Index from './components'
import LoginPage from './components/login-page'


export default class App extends React.Component {

  updateStacker = () => { }

  render() {
    return (
      <View style={styles.container}>
        <LoginPage />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#414246',
    height: "100%",
    width: "100%"
  },
});
