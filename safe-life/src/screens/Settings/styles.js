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
    containerSettings: {
        marginTop: Platform.OS == "ios" ? 60 : 40
    },
    containerTitleSettings: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    titleSettings: {
        fontSize: 25,
        fontWeight: "normal"
    },
    nameTitleSettings: {
        fontSize: 25,
        color: "#970AED",
    },
    containerModalSettings: {
        marginTop: Platform.OS == "ios" ? 60 : 40, 
        display: "flex", 
        flexDirection: "column", 
        gap: 30
    },
    containerInfoSettings: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: Platform.OS == "ios" ? 5 : 3,
        borderBottomWidth: 1,
        borderBottomColor: "#970AED",
        padding: 5
    },
    textDefinition: {
        fontSize: 16,
        color: "#970AED",
        fontWeight: "500"
    },
    containerEdit: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    containerExit: {
        marginTop: Platform.OS == "ios" ? 80 : 45, 
        alignItems: "center", 
        gap: Platform.OS == "ios" ? 30 : 10
    },
    buttonExitStyle: {
        width: Platform.OS == "ios" ? 300 : 250,
        alignItems: "center",
        padding: Platform.OS == "ios" ? 20 : 10,
        backgroundColor: "#970AED",
        borderRadius: 20
    },
    textButtonExit: {
        fontSize: 20,
        color: "#fff"
    },
    textDeleteAccount: {
        color: "red",
        fontSize: 16,
        textDecorationLine: "underline"
    },
    dialogExitModal: {
        gap: 20, 
        height: 100, 
        flexDirection: "column"
    },
    styleOptionModal: {
        flexDirection: "row", 
        gap: 20, 
        alignItems: "center"
    },
    textOptionCancelModal: {
        color: "blue",
        fontSize: 16,
        fontWeight: "bold"
    },
    textOptionDeleteModal: {
        color: "red",
        fontSize: 16,
        fontWeight: "bold"
    }
})

export default styles