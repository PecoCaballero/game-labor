import { StyleSheet } from 'react-native'


const gameStyle = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height: "100%",
        width: '100%',
        backgroundColor: '#414246'
    },
    answersContainer: {
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height: "50%",
        width: '80%'
    },
    optionContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: "20%",
        width: '80%',
        backgroundColor: '#b9b9bd',
        borderRadius: 10
    },
    messageView: {
        alignItems: 'center',
        justifyContent: 'center',
        height: "20%",
        width: '80%',
        backgroundColor: '#009922',
        borderRadius: 50,
    },
    messageText: {

        fontSize: 20,
        color: '#ffffff'
    },
    finalButton: {
        alignItems: 'center',
        justifyContent: 'center',
        height: "10%",
        width: '55%',
        backgroundColor: '#b9b9bd',
        borderRadius: 10
    }
})

export default gameStyle