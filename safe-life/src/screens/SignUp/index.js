import React, { useState } from 'react';
import { View, Text, KeyboardAvoidingView, ScrollView, TouchableOpacity, Platform, } from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from './styles';
import ModalInput from '../../components/ModalInput';
import ModalButton from '../../components/ModalButton';
import { useNavigateToScreen } from '../../../utils/navigations';
import DateTimePicker from '@react-native-community/datetimepicker';
import { RadioButton } from 'react-native-paper';
import { signUp } from '../../../utils/signup';

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





    const navigationScreen = useNavigateToScreen();

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

    

    return (
        <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'} style={styles.container}>
            <ScrollView contentContainerStyle={{ width: '100%', alignItems: 'center' }} showsVerticalScrollIndicator={false} >
                <Animatable.View animation="slideInDown" style={styles.containerTitle}>
                    <Text style={styles.title}>Welcome to SafeBaby</Text>
                    <Text style={styles.subTitle}>Sign Up</Text>
                </Animatable.View>
                <Animatable.Image animation="fadeInUp" source={require('../../../assets/SignUpScreenLogo.png')} resizeMode="contain" />
                <Animatable.View animation="slideInLeft" style={styles.containerOptions}>
                    <ModalInput placeholder={'Nome Completo'} secureTextEntry={false} value={name} onChangeText={text => setName(text)}/>
                    <ModalInput placeholder={'Email'} secureTextEntry={false}  value={email} onChangeText={text => setEmail(text)} />
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
                    <ModalInput placeholder={'Nickname'} secureTextEntry={false}  value={userName} onChangeText={text => setUserName(text)} />
                    <Text style={styles.text}>Qual seu tipo sanguíneo?</Text>
                    <RadioButton.Group onValueChange={value => setBloodType(value)} value={bloodType}>
                        <RadioButton.Item label="A+" value="A+" />
                        <RadioButton.Item label="A-" value="A-" />
                        <RadioButton.Item label="B+" value="B+" />
                        <RadioButton.Item label="B-" value="B-" />
                        <RadioButton.Item label="AB+" value="AB+" />
                        <RadioButton.Item label="AB-" value="AB-" />
                        <RadioButton.Item label="O+" value="O+" />
                        <RadioButton.Item label="O-" value="O-" />
                    </RadioButton.Group>
                    <ModalInput placeholder={'Senha'} secureTextEntry={true}  value={password} onChangeText={text => setPassword(text)} />
                    <ModalButton title={'Sign Up'} />
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
