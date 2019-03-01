import React, { Component } from 'react';
import { View, Text, BackHandler, ToastAndroid, TouchableOpacity } from 'react-native'
import gameStyle from './css/game-styles';

class GamePage extends Component {
    state = {
        questions: [{
            question: 'Pergunta 1',
            option1: 'Resposta 1',
            option2: 'Resposta 2',
            option3: 'Resposta 3'
        }, {
            question: 'Pergunta 2',
            option1: 'Resposta 2.1',
            option2: 'Resposta 2.2',
            option3: 'Resposta 2.3'
        }, {
            question: 'Pergunta 3',
            option1: 'Resposta 3.1',
            option2: 'Resposta 3.2',
            option3: 'Resposta 3.3'
        },
        {
            question: 'Pergunta 3',
            option1: 'Resposta 3.1',
            option2: 'Resposta 3.2',
            option3: 'Resposta 3.3'
        }],
        position: 0
    }
    static navigationOptions = {
        title: 'Game Labor',
        headerStyle: {
            backgroundColor: '#fef500'
        }
    }

    choiceEvent = event => {
        let { position } = this.state
        let { navigate } = this.props.navigation
        this.setState({ position: parseInt(position + 1) })
    }

    render() {
        let { questions, position } = this.state
        let { navigate } = this.props.navigation
        if (position >= 3) {
            return (
                <View style={gameStyle.container}>
                    <View style={gameStyle.messageView}>
                        <Text style={gameStyle.messageText}>PARABÉNS</Text>
                        <Text style={gameStyle.messageText}>Questionário Concluído</Text>
                    </View>
                    <TouchableOpacity onPress={() => { navigate('Office') }} style={gameStyle.finalButton}><Text>Finalizar</Text></TouchableOpacity>
                </View>
            )
        }
        else {
            return (
                <View style={gameStyle.container}>
                    <View style={gameStyle.optionContainer}><Text>{questions[position].question}</Text></View>
                    <View style={gameStyle.answersContainer}>
                        <TouchableOpacity onPress={this.choiceEvent} style={gameStyle.optionContainer}><Text>{questions[position].option1}</Text></TouchableOpacity>
                        <TouchableOpacity onPress={this.choiceEvent} style={gameStyle.optionContainer}><Text>{questions[position].option2}</Text></TouchableOpacity>
                        <TouchableOpacity onPress={this.choiceEvent} style={gameStyle.optionContainer}><Text>{questions[position].option3}</Text></TouchableOpacity>
                    </View>
                </View>);
        }
    }
}

export default GamePage;