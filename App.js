import { createAppContainer, createStackNavigator } from 'react-navigation'
import Index from './components'
import LoginPage from './components/login-page'
import ProfilePage from './components/profile-page'
import OfficePage from './components/office-page'
import FeedEmpresas from './components/feed-empresas'
import RegisterPage from './components/register-page'
import GamePage from './components/game-page'


const navigator = createStackNavigator({
  Home: { screen: Index },
  Login: { screen: LoginPage },
  Register: { screen: RegisterPage },
  Office: { screen: OfficePage },
  Profile: { screen: ProfilePage },
  FeedEmpresas: { screen: FeedEmpresas },
  Game: { screen: GamePage }
})

const App = createAppContainer(navigator)


export default App

