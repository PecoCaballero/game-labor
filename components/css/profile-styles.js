import { StyleSheet } from "react-native"

const profileStyles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#fef500',
        width: "100%",
        height: "100%",
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: '#414246',
    },
    pageTitle: {
        color: '#414246',
        fontSize: 45,
    },
    topContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: "1%",
        flexDirection: "row",
        marginTop: "-30%"


    },

    bottomContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '50%',
        width: '80%',
        borderRadius: 10,
        backgroundColor: '#bab9be',
        marginTop: "8%",

    },
    achievementsContainer: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        height: '25%'
    },
    skillContainer: {
        margin: '1%',
        display: 'flex',
        justifyContent: 'center'
    },

    formerJobsContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: "50%",
        marginTop: "15%",
    },
    formerJobs: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "column",
        borderRadius: 100,
        backgroundColor: '#ffffff',
        height: "40%",
        width: "200%",
        marginTop: '5%',
    },
    formerJobsText: {
        color: '#414246'
    },
    thumbnailProfile: {
        width: 90,
        height: 90,
    },
    name: {
        color: "#ffffff",
        fontSize: 25
    },
    carrer: {
        color: "#ffffff",
        fontSize: 20
    },
    nameCarrerContainer: {
        marginTop: 10,
        marginStart: 30,
        width: 200,
        borderStyle: "solid",
        borderColor: '#ffffff'
    },
    achievementsText: {
        marginTop: "10%",
        color: '#ffffff',
        fontSize: 26,
        backgroundColor: "#808080"
    },



})

export default profileStyles