import React from 'react';
import { View, Text, KeyboardAvoidingView, ScrollView, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable'
import styles from './styles';
import ModalInput from '../../components/ModalInput';
import ModalButton from '../../components/ModalButton';
import { useNavigateToScreen } from '../../../utils/navigations';



const SignUpScreen = () => {

    const navigationScreen = useNavigateToScreen()

    return (
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.container}>
            <ScrollView contentContainerStyle={{ width: "100%", alignItems: "center" }} showsVerticalScrollIndicator={false}>
                <Animatable.View animation="slideInDown" style={styles.containerTitle}>
                    <Text style={styles.title}>Welcome to SafeBaby</Text>
                    <Text style={styles.subTitle}>Sign Up</Text>
                </Animatable.View>
                <Animatable.Image animation="fadeInUp" source={require('../../../assets/SignUpScreenLogo.png')} resizeMode='contain' />
                <Animatable.View animation="slideInLeft" style={styles.containerOptions}>
                    <ModalInput placeholder={"Nome"} secureTextEntry={false} />
                    <ModalInput placeholder={"Email"} secureTextEntry={false} />
                    <ModalInput placeholder={"Senha"} secureTextEntry={true}/>
                    <ModalButton title={"Sign Up"} />
                </Animatable.View>
                <Animatable.View animation="slideInRight" style={styles.containerRedirection}>
                    <Text style={styles.alertLink}>Já possui uma conta?</Text>
                    <TouchableOpacity onPress={() => navigationScreen("Login Screen")}>
                        <Text style={styles.linkRedirection}>Login</Text>
                    </TouchableOpacity>
                </Animatable.View>
            </ScrollView>
        </KeyboardAvoidingView >
    )
}

export default SignUpScreen;