import { StyleSheet } from 'react-native'

const feedStyles = StyleSheet.create({
    container: {
        backgroundColor: '#414246',
        height: '100%',
        width: '100%'
    },
    searchBarContainer: {
        height: '8%',
        width: '100%'
    },
    slotView: {
        display: 'flex',
        alignItems: 'center',
        height: "100%",
        width: '40%'
    },
    slotName: {
        color: '#414246',
        fontSize: 18
    },
    requirementView: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        height: '45%'
    },
    feedContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%',
        height: '90%'
    },
    contentContainer: {
        width: '90%',
        height: "18%",
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#b9b9bd',
    }
})

export default feedStyles