import React from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';


const HomeScreen = () => {
    const navigation = useNavigation() 
    return (
        <View style={styles.container}>
            <View style={styles.containerTitle}>
                <Text style={styles.title}>Welcome to</Text>
                <Text style={styles.subTitle}>SafeLife</Text>
            </View>
            <Image source={require('../../../assets/HomeScreenLogo.png')} />
            <View style={styles.containerOptions}>
                <TouchableOpacity style={styles.signUpOption}>
                    <Text style={styles.textSignUpOption}>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginOption}>
                    <Text style={styles.textLoginOption}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default HomeScreen;