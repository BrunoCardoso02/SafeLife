import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    inputStyle: {
        borderWidth: 1.5,
        borderColor: "#970AED",
        width: Platform.OS === "ios" ? 300 : 280,
        height: Platform.OS === "ios" ? 40 : 40,
        borderRadius: Platform.OS === "ios" ? 10 : 7,
        padding: 5
    }
})

export default styles