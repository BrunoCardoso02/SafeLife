import { Platform, StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25,
        backgroundColor: "#fff"
    },
    titleStyle: {
        color: "#970AED",
        fontSize: 30,
        fontWeight: "700",
        marginTop: Platform.OS == "ios" ? 70 : 50
    },
    containerNotification: {
        padding: 10,
        marginTop: Platform.OS == "ios" ? 40 : 20,
        display: "flex",
        flexDirection: "column",
    },
    modalNotification: {
        width: Platform.OS == "ios" ? 345 : 320,
        height: 150,
        borderWidth: 1,
        borderColor: "#D8D8D8",
        borderRadius: Platform.OS == "ios" ? 20 : 12,
        paddingTop: 20,
        paddingLeft: 9,
        paddingRight: 10,
        marginBottom: 20
    },
    modalTitleNotification: {
        display: "flex",
        flexDirection: "row"
    },
    titleNotification: {
        color: "#970AED",
        fontSize: 20,
        fontWeight: "500",
        marginBottom: Platform.OS == "ios" ? 10 : 5,
    },
    textNotification: {
        textAlign: "left",
        marginLeft: 15
    },
})

export default styles