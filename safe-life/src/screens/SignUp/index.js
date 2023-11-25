import React, { useState, useContext } from 'react';
import { View, Text, KeyboardAvoidingView, ScrollView, TouchableOpacity, Platform, } from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from './styles';
import ModalInput from '../../components/ModalInput';
import ModalButton from '../../components/ModalButton';
import { useNavigateToScreen } from '../../../utils/navigations';
import DateTimePicker from '@react-native-community/datetimepicker';
import { RadioButton } from 'react-native-paper';
import { signUp } from '../../../utils/signup';
import { signin } from '../../../utils/signin';
import { AuthContext } from '../../Context/AuthContext';
import { Picker, } from '@react-native-picker/picker';
import api from '../../api/api';
import { signIn } from '../../utils/signin';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';

const SignUpScreen = () => {
    const [email, setEmail] = useState('mariliamende@gmail.com');
    const [password, setPassword] = useState('Testandoapi4321');
    const [name, setName] = useState('Marilia Carvalho');
    const [dateOfBirth, setDateOfBirth] = useState(new Date());
    const [bloodType, setBloodType] = React.useState('A+');
    const [userName, setUserName] = useState('mariliaxp4')
    const [showDateInput, setShowDateInput] = useState(false);
    const [mode, setMode] = useState('date');
    const [displayDate, setDisplayDate] = useState('');
    const { setToken, setId } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);


    const navigationScreen = useNavigateToScreen();

    const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']

    const onChangeDate = (selectedDate) => {
        setShowDateInput(Platform.OS === 'ios' ? true : false);

        if (selectedDate) {
            const dateObject = selectedDate instanceof Date ? selectedDate : new Date(selectedDate);

            const minDate = new Date('1900-01-01');
            const maxDate = new Date();

            if (dateObject >= minDate && dateObject <= maxDate) {
                setDateOfBirth(dateObject);
                setDisplayDate(dateObject.toLocaleDateString());
            } else {
                console.log("Data selecionada fora do intervalo permitido.");

            }
        }
    };
    const showMode = (modeToShow) => {
        setShowDateInput(true);
        setMode(modeToShow)
    }

    const dados = {
        "email": email,
        "password": password,
        "fullName": name,
        "birthDate": dateOfBirth.toISOString().split('T')[0],
        "bloodType": bloodType,
        "username": userName
    }

    function signUp() {
        console.log(dados)
         api.apiWithoutAuth.post('/account/signup', dados)
             .then(() => {
                 console.log("Conta criada com sucesso");
                 signIn(dados, setToken, setId, setLoading, navigationScreen)
 
             })
             .catch((err) => console.log(err))
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'} style={styles.container}>
            <ScrollView contentContainerStyle={{ width: '100%', alignItems: 'center' }} showsVerticalScrollIndicator={false} >
                <Animatable.View animation="slideInDown" style={styles.containerTitle}>
                    <Text style={styles.title}>Welcome to SafeBaby</Text>
                    <Text style={styles.subTitle}>Sign Up</Text>
                </Animatable.View>
                <Animatable.Image animation="fadeInUp" source={require('../../../assets/SignUpScreenLogo.png')} resizeMode="contain" />
                <Animatable.View animation="slideInLeft" style={styles.containerOptions}>
                    <ModalInput placeholder={'Nome Completo'} secureTextEntry={false} value={name} onChangeText={text => setName(text)} />
                    <ModalInput placeholder={'Email'} secureTextEntry={false} value={email} onChangeText={text => setEmail(text)} />
                    <TouchableOpacity onPress={() => showMode("date")}>
                        <Text style={styles.text}>Qual sua data de Nascimento?</Text>
                        {Platform.OS == "android" && displayDate && <Text style={styles.dateText}>Data de Nascimento: {displayDate}</Text>}
                    </TouchableOpacity>
                    <Text style={{marginTop: -20, color: "grey"}}>Idade Minima: 10 anos</Text>
                    {
                        showDateInput && (
                            <DateTimePicker
                                value={dateOfBirth} 
                                mode={mode}
                                display="default" 
                                onChange={(event, selectedDate) => onChangeDate(selectedDate)}
                            />
                        )
                    }
                    <ModalInput placeholder={'Nickname'} secureTextEntry={false} value={userName} onChangeText={text => setUserName(text)} />
                    <Text style={styles.text}>Qual seu tipo sanguíneo?</Text>
                    {Platform.OS == "ios" ? (
                        <Picker
                            selectedValue={bloodType}
                            onValueChange={setBloodType}
                        >
                            {bloodTypes.map(type => (
                                <Picker.Item key={type} label={type} value={type} />
                            ))}
                        </Picker>
                    ) : (
                        <Picker
                            selectedValue={bloodType}
                            onValueChange={(itemValue, itemIndex) => setBloodType(itemValue)}
                        >
                            {bloodTypes.map(type => (
                                <Picker.Item key={type} label={type} value={type} />
                            ))}
                        </Picker>
                    )}

                    <ModalInput placeholder={'Senha'} secureTextEntry={true} value={password} onChangeText={text => setPassword(text)} />
                    <ModalButton title={loading ? (<ActivityIndicator animating={loading} color={MD2Colors.white} />) : "Sign up"} onPress={signUp} />
                </Animatable.View>
                <Animatable.View animation="slideInRight" style={styles.containerRedirection}>
                    <Text style={styles.alertLink}>Já possui uma conta?</Text>
                    <TouchableOpacity onPress={() => navigationScreen('Login Screen')}>
                        <Text style={styles.linkRedirection}>Login</Text>
                    </TouchableOpacity>
                </Animatable.View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default SignUpScreen;
