import React, { Component } from 'react';
import { View, Text } from 'react-native'
import { Thumbnail, Input, Header, Button, Icon, InputGroup } from 'native-base'

import Monitora from './images/monitora_bigger.png'
import Facebook from './images/facebook.png'
import Godaddy from './images/godaddy_bigger.png'
import Amazon from './images/amazon.png'

class FeedEmpresas extends Component {
    state = { search: "" }
    static navigationOptions = {
        title: 'Feed Empresas',
        headerStyle: {
            backgroundColor: '#fef500'
        }
    }

    updateSearch = search => {
        this.setState({ search })
    }

    render() {
        var { navigate } = this.props.navigation
        let { search } = this.state
        return (
            <View>
                
                <View>
                    <Thumbnail large source={Monitora}></Thumbnail>
                    <Text>Desenvolvedor Full-Stack</Text>
                </View >
                <View>
                    <Thumbnail large source={Facebook}></Thumbnail>
                    <Text>Desenvolvedor React</Text>
                </View>
                <View>
                    <Thumbnail large source={Godaddy}></Thumbnail>
                    <Text>Desenvolvedor React</Text>
                </View>
                <View>
                    <Thumbnail large source={Amazon}></Thumbnail>
                    <Text>Análista de dados</Text>
                </View>
            </View >);
    }
}

export default FeedEmpresas;