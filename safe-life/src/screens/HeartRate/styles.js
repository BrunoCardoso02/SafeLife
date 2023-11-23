import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25,
        backgroundColor: "#fff",
    },
    titleStyle: {
        color: "#970AED",
        fontSize: 30,
        fontWeight: "700",
        marginTop: Platform.OS == "ios" ? 70 : 50
    },
    subtitleDate: {
        color: "#970AED",
        fontSize: 20,
        fontWeight: "500",
        marginTop: Platform.OS == "ios" ? 20 : 10
    },
    containerContent: {
        width: "100%",
        height: "70%",
        marginTop: 40,
        alignItems: "center",
        justifyContent: "center"

    },
    containerFrequency: {
        alignItems: "center"
    },
    textDefault: {
        fontSize: 20,
        color: "grey"
    },
    button: {
        marginTop: Platform.OS == "ios" ? 100 : 50,
        backgroundColor: "#970AED",
        width: 250,
        padding: 25,
        alignItems: "center",
        borderRadius: 20
    },
    buttonText: {
        color: "#fff",
        fontSize: 20
    }
})

export default styles