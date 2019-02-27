import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Index from './components'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Index />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#414246',
    height: 1000
  },
});
