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

const SignUpScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState(new Date());
    const [bloodType, setBloodType] = React.useState('A+');
    const [userName, setUserName] = useState('')
    const [showDateInput, setShowDateInput] = useState(false);
    const [mode, setMode] = useState('date');
    const [displayDate, setDisplayDate] = useState('');
    const { setToken, setId } = useContext(AuthContext);



    const navigationScreen = useNavigateToScreen();

    const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']

    const onChangeDate = (e, selectedDate) => {
        setShowDateInput(Platform.OS === 'ios' ? true : false);
        if (selectedDate) {
            setDateOfBirth(selectedDate);
            setDisplayDate(selectedDate.toLocaleDateString());
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
        api.apiWithoutAuth.post('/account/signup', dados)
            .then(() => {
                console.log("Conta criada com sucesso");
                signin(email, password, setToken, setId, navigationScreen)

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
                    {
                        showDateInput && (
                            <DateTimePicker
                                value={dateOfBirth}
                                mode={mode}
                                onChange={onChangeDate}
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
                    <ModalButton title={'Sign Up'} onPress={signUp} />
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