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
    containerItens: {
        width: "100%",
        height: 400,
        marginTop: 30,
    },
    list: {
        width: "100%",
        height: 80,
        backgroundColor: "#970AED",
        borderRadius: 10,
        padding: 10,
        display: "flex",
        flexDirection: "column",
        gap: 7,
        marginBottom: 20
    },
    listTitle: {
        color: "#fff",
        fontWeight: "500"
    },
    listText: {
        color: "#fff",
    },
    button: {
        backgroundColor: "#D599FA",
        position: "absolute",
        width: "20%",
        height: 70,
        marginTop: Platform.OS == "ios" ? 700 : 600,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 1000,
        marginLeft: 300
    },
    inputStyle: {
        borderBottomWidth: 2,
        borderBottomColor: "#970AED",
        width: "86%",
        height: 50,
        marginLeft: 15,
        marginBottom: Platform.OS == "ios" ? 20 : 10
    },
    buttonStyle: {
        backgroundColor: "#970AED",
        width: "88%",
        height: Platform.OS === "ios" ? 55 : 45,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
        marginLeft: 15,
        marginTop: 10
    },
    textButtonStyle: {
        color: "#fff",
        fontSize: 16
    }
})
export default styles