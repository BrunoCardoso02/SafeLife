import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: "#970AED",
        width: Platform.OS === "ios" ? 300 : 280,
        height: Platform.OS === "ios" ? 55 : 45,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15
    },
    textStyle: {
        color: "#fff",
        fontSize: 16
    }
})

export default styles