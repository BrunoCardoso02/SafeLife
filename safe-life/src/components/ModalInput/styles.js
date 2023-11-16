import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    inputStyle: {
        borderWidth: 1.5,
        borderColor: "#970AED",
        width: Platform.OS === "ios" ? 300 : 280,
        height: Platform.OS === "ios" ? 55 : 45,
        borderRadius: Platform.OS === "ios" ? 10 : 7,
        padding: Platform.OS === "ios" ? 20 : 12,
    }
})

export default styles