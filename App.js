import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'

import Index from './components'
import LoginPage from './components/login-page'
import ProfilePage from './components/profile-page'
import OfficePage from './components/office-page';
import FeedEmpresas from './components/feed-empresas'

const navigator = createStackNavigator({
  Home: { screen: Index },
  Login: { screen: LoginPage },
  Office: { screen: OfficePage },
  Profile: { screen: ProfilePage },
  FeedEmpresas: { screen: FeedEmpresas }
})

const App = createAppContainer(navigator)


export default App
