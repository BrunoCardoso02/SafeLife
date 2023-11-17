import {Platform, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    tabBarIconStyle: {
        marginTop: Platform.OS == "ios" ? 27 : 0
    }
})

export default styles