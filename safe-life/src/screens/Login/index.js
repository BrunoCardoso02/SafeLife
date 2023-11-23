import React, { useState } from 'react';
import { View, Text, Image, ScrollView, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable'
import styles from './styles';
import ModalInput from '../../components/ModalInput';
import ModalButton from '../../components/ModalButton';
import { useNavigateToScreen } from '../../../utils/navigations';
import api from '../../api/api';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';

const LoginScreen = () => {
    const [text, setText] = React.useState('');
    const [criptographedPassword, setCriptographedPassword] = useState(true);
    const [email, setEmail] = useState('dragonxdgames@gmail.com');
    const [password, setPassword] = useState('eusouoadminbitch');
    const [loading, setLoading] = useState(false)

    const navigationScreen = useNavigateToScreen();

    function togglePasswordVisibility() {
        setCriptographedPassword(!criptographedPassword)
    }

    const dados = {
        email: email,
        password: password,
    }
    function signIn() {
        setLoading(true)
        api.post('/account/signin', dados)
        .then(() => {
            console.log("Login efetuado");
            navigationScreen("Heart Rate Screen")
        })
        .catch((err) => {
            alert("Dados inválidos");
            setLoading(false)
        })
    }
  
    return (
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.container}>
            <ScrollView contentContainerStyle={{ width: "100%", alignItems: "center" }} showsVerticalScrollIndicator={false}>
                <Animatable.View animation="slideInDown" style={styles.containerTitle}>
                    <Text style={styles.title}>Welcome back</Text>
                    <Text style={styles.subTitle}>Login</Text>
                </Animatable.View>
                <Animatable.Image animation="fadeInUp" source={require('../../../assets/LoginScreenLogo.png')} resizeMode='contain' />
                <Animatable.View animation="slideInLeft" style={styles.containerOptions}>
                    <ModalInput placeholder={"Email"} secureTextEntry={false} value={email} onChangeText={text => setEmail(text)} />
                    <ModalInput placeholder={"Senha"} secureTextEntry={true} value={password} onChangeText={text => setPassword(text)}/>
                    <ModalButton title={ loading ? (<ActivityIndicator animating={loading} color={MD2Colors.white} />) : "Login"} onPress={signIn} />
                </Animatable.View>
                <Animatable.View animation="slideInRight" style={styles.containerRedirection}>
                    <Text style={styles.alertLink}>Ainda não possui uma conta?</Text>
                    <TouchableOpacity onPress={() => navigationScreen("Sign Up Screen")}>
                        <Text style={styles.linkRedirection}>Sign Up</Text>
                        
                    </TouchableOpacity>
                </Animatable.View>
            </ScrollView>
        </KeyboardAvoidingView >
    )
}

export default LoginScreen;