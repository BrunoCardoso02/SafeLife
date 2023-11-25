import React from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { useNavigateToScreen } from '../../utils/navigations';
import * as Animatable from 'react-native-animatable'


const HomeScreen = () => {
    const navigationScreen = useNavigateToScreen()
    return (
        <View style={styles.container}>
            <Animatable.View animation="slideInDown" style={styles.containerTitle}>
                <Text style={styles.title}>Welcome to</Text>
                <Text style={styles.subTitle}>SafeBaby</Text>
            </Animatable.View>
            <Animatable.Image animation="fadeInUp" source={require('../../../assets/HomeScreenLogo.png')} resizeMode='contain'/>
            <Animatable.View animation="slideInLeft" style={styles.containerOptions}>
                <TouchableOpacity style={styles.signUpOption} onPress={() => navigationScreen('Sign Up Screen')} >
                    <Text style={styles.textSignUpOption}>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginOption} onPress={() => navigationScreen('Login Screen')}>
                    <Text style={styles.textLoginOption}>Login</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    )
}

export default HomeScreen;