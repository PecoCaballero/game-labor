import React, { Component } from 'react';
import { View, Text, BackAndroid } from 'react-native'
import { Thumbnail, Input, Header, Button, Icon, InputGroup } from 'native-base'
import { SearchBar } from 'react-native-elements'
import feedStyles from './css/feed-styles'
import Monitora from './images/monitora_bigger_branco.png'
import Facebook from './images/facebook.png'
import Godaddy from './images/godaddy_branco.jpg'
import Amazon from './images/amazon_branco.jpg'
import Java from './images/java_logo.png'
import Mysql from './images/mysql.jpg'

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
        let { search } = this.state
        return (
            <View style={feedStyles.container}>
                <View style={feedStyles.searchBarContainer}>
                    <SearchBar onChangeText={this.updateSearch} round platform='android' value={search} placeHolder="Search..."></SearchBar>
                </View>
                <View style={feedStyles.feedContainer}>
                    <View style={feedStyles.contentContainer}>
                        <Thumbnail large source={Monitora}></Thumbnail>
                        <View style={feedStyles.slotView}>
                            <Text style={feedStyles.slotName}>Desenvolvedor Full-Stack</Text>
                            <View style={feedStyles.requirementView}>
                                <Thumbnail small source={Java} />
                                <Thumbnail small source={Mysql} />
                            </View>
                        </View>
                    </View>
                    <View style={feedStyles.contentContainer}>
                        <Thumbnail large source={Facebook}></Thumbnail>
                        <View style={feedStyles.slotView}>
                            <Text style={feedStyles.slotName}>Desenvolvedor React</Text>
                            <View style={feedStyles.requirementView}>
                                <Thumbnail small source={Java} />
                                <Thumbnail small source={Mysql} />
                            </View>
                        </View>
                    </View>
                    <View style={feedStyles.contentContainer}>
                        <Thumbnail large source={Godaddy}></Thumbnail>
                        <View style={feedStyles.slotView}>
                            <Text style={feedStyles.slotName}>Desenvolvedor React</Text>
                            <View style={feedStyles.requirementView}>
                                <Thumbnail small source={Java} />
                                <Thumbnail small source={Mysql} />
                            </View>
                        </View>
                    </View>
                    <View style={feedStyles.contentContainer}>
                        <Thumbnail large source={Amazon}></Thumbnail>
                        <View style={feedStyles.slotView}>
                            <Text style={feedStyles.slotName}>Analista de dados</Text>
                            <View style={feedStyles.requirementView}>
                                <Thumbnail small source={Java} />
                                <Thumbnail small source={Mysql} />
                            </View>
                        </View>
                    </View>
                </View>
            </View >);
    }
}

export default FeedEmpresas;