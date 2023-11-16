import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#fff"
    },
    containerTitle: {
        marginTop: Platform.OS === "ios" ? 110 : 75,
        marginBottom:  Platform.OS === "ios" ? 80 : 50,
        alignItems: "center"
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
        marginTop: Platform.OS === "ios" ? 40 : 20,
        display: "flex",
        flexDirection: "column",
        gap: Platform.OS === "ios" ? 30 : 20,
    },
    signUpOption: {
        width: 320,
        padding: 15,
        backgroundColor: "#970AED",
        alignItems: "center",
        color: "#fff",
        borderRadius: 10
    },
    loginOption: {
        width: 320,
        padding: 15,
        borderWidth: 2,
        borderColor: "#970AED",
        alignItems: "center",
        color: "#fff",
        borderRadius: 10 
    },
    textSignUpOption: {
        color: "#fff",
        fontWeight: "500"
    },
    textLoginOption: {
        color: "#970AED",
        fontWeight: "500"
    }
})

export default styles