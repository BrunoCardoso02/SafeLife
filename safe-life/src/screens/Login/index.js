import React, { useState, useContext } from 'react';
import { View, Text, Image, ScrollView, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable'
import styles from './styles';
import ModalInput from '../../components/ModalInput';
import ModalButton from '../../components/ModalButton';
import { useNavigateToScreen } from '../../../utils/navigations';
import api from '../../api/api';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import { AuthContext } from '../../Context/AuthContext';
import { signin } from '../../../utils/signin';

const LoginScreen = () => {
    const [email, setEmail] = useState('camilasilva@gmail.com');
    const [password, setPassword] = useState('Testandoapi321');
    const [loading, setLoading] = useState(false);
    const { setToken, setId, id, token } = useContext(AuthContext);

    const navigationScreen = useNavigateToScreen();
    
    const dados = {
        email: email,
        password: password
    }

    function signIn() {
        setLoading(true);
        api.apiWithoutAuth.post('/account/signin', dados)
            .then((response) => {
                const token = response.data.token;
                const id = response.data.accountId
                //console.log("Login efetuado", token);
                //console.log("ID", id);
                setToken(token)
                setId(id)
                navigationScreen("Register Child");
                setLoading(false)
            })
            .catch((err) => {
                console.log("Dados inválidos");
                setLoading(false);
            });
    }
    /*const handleSignIn = async () => {
         await signin(email, password, setToken, setId, navigationScreen);
    }*/
    
  
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

export default LoginScreen