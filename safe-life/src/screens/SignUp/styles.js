import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#fff",
        width: "100%",
    },
    containerTitle: {
        marginTop: Platform.OS === "ios" ? 100 : 75,
        marginBottom:  Platform.OS === "ios" ? 70 : 50,
        alignItems: "center",
    },
    title: {
        color: "#970AED",
        fontSize: Platform.OS === "ios" ? 25 : 20,
        fontWeight: "500"
    },
    subTitle: {
        color: "#970AED",
        fontSize: Platform.OS === "ios" ? 42 : 38,
        fontWeight: "bold",
    },
    containerOptions: {
        marginTop: Platform.OS === "ios" ? 20 : 15,
        display: "flex",
        flexDirection: "column",
        gap: Platform.OS === "ios" ? 25 : 20,
    },
    text: {
        color: "#970AED",
    },
    dateText: {
        color: "#696969"
    },
    containerRedirection: {
        marginTop: 15,
        display: "flex",
        flexDirection: "row",
        gap: 7
    },
    alertLink: {
        color: "#696969",
        marginBottom: 40
    },
    linkRedirection: {
        color: "#970AED"
    }
})

export default styles