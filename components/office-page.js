import React, { Component } from 'react';
import { View, Button } from 'native-base';
import { Text } from 'react-native'


class OfficePage extends Component {
    state = {}
    static navigationOptions = {
        header: null
    }

    render() {
        let { navigate } = this.props.navigation
        return (
            <View>
                <Button onPress={() => navigate("Profile")}><Text>Retrato</Text></Button>
                <Button onPress={() => navigate("FeedEmpresas")}><Text>Celular</Text></Button>
            </View>);
    }
}

export default OfficePage;