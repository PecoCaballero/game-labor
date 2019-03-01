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
        justifyContent: 'space-evenly',
        height: '55%',
        width: '80%',
        borderRadius: 10,
        backgroundColor: '#bab9be',
        marginTop: "8%",

    },
    achievementsContainer: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        height: '50%'
    },
    skillContainer: {
        display: 'flex',
        justifyContent: 'center'
    },

    formerJobsContainer: {
        display: 'flex',
        alignItems: 'center',
        height: "50%",
        width: '100%',
        marginTop: "10%"
    },
    formerJobs: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: "row",
        height: "60%",
        width: "90%",

    },
    slotText: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: "70%",
        fontSize: 20,
        backgroundColor: '#ffffff',
        borderRadius: 30
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
        color: '#ffffff',
        fontSize: 23
    },
    achievementsView: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        height: '30%',
        width: '80%'
    },
    arrowLeft: {
        borderColor: "#ffffff"
    },

    arrowRight: {
        borderColor: "#ffffff"
    },
    arrowView: {
        height: '60%',
        width: '15%'
    },
    recommendedView: {
        height: '20%',
        width: '100%',
        display: 'flex',
        alignItems: 'center'
    }
})

export default profileStyles