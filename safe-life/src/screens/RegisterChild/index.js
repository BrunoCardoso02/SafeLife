import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Dialog, Portal } from 'react-native-paper';
import { TextInput } from 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import { RadioButton } from 'react-native-paper';
import api from '../../api/api';
import { AuthContext } from '../../Context/AuthContext';
import { useNavigateToScreen } from '../../../utils/navigations';
import Entypo from 'react-native-vector-icons/Entypo'


const RegisterChild = () => {
    const [modalVisible, setModalVisible] = React.useState(false);
    const [name, setName] = useState('');
    const [genre, setGenre] = useState('');
    const { token, id } = useContext(AuthContext);
    const [babyData, setBabyData] = useState([]);
    const [modalVisibleOptions, setModalVisibleOptions] = React.useState(false)

    const hideDialogRegister = () => setModalVisible(false);

    const hideDialogOptions = () => setModalVisibleOptions(false)

    const navigationScreen = useNavigateToScreen();

    const data = {
        babyName: name,
        genre: genre
    }
    function registerBaby() {
        api.apiWithAuth.post(`/baby/project/create?accountId=${id}`, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                console.log('Baby registrado com sucesso:', response.data);
                getBabyData();
                setName('')
                setModalVisible(false)
            })
            .catch(error => {
                console.error('Erro ao registrar o bebê:', error);
            });

    }

    function getBabyData() {
        api.apiWithAuth.get(`/baby/project/me/list?accountId=${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((res) => {
                setBabyData(res.data)
            })
            .catch((err) => alert("Não há dados disponíveis"))
    }
    useEffect(() => {
        console.log(token, id)
        getBabyData()
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>Seus bebês👶</Text>
            <ScrollView style={styles.containerItens}>
                {babyData.map((item, indice) => (
                    <TouchableOpacity onPress={() => navigationScreen("Heart Rate Screen")}>
                        <View style={styles.list} key={indice}>
                            <View style={styles.listTitleContainer}>
                                <Text style={styles.listTitle}>{item.babyName}</Text>
                                <TouchableOpacity onPress={() => setModalVisibleOptions(true)}>
                                    <Entypo name='dots-three-horizontal' size={20} color={"#fff"} style={styles.listIconOptions} />
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.listText}>Gênero: {item.genre}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
            <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
                <MaterialIcons name='add' size={40} color={"#fff"} />
            </TouchableOpacity>
            <Portal>
                <Dialog visible={modalVisible} onDismiss={hideDialogRegister}>
                    <Dialog.Title style={styles.titleStyle}>Registre seu bebê</Dialog.Title>
                    <Dialog.Content>
                        <TextInput placeholder='Nome do bebê' value={name} onChangeText={text => setName(text)} style={styles.inputStyle} />
                        <RadioButton.Group onValueChange={value => setGenre(value)} value={genre} style={{ borderWidth: 0, borderColor: 'transparent' }}  >
                            <RadioButton.Item label="Masculino" value="masculino" />
                            <RadioButton.Item label="Feminino" value="feminino" />
                            <RadioButton.Item label="Não tenho certeza..." value="indefinido" />
                        </RadioButton.Group>
                        <TouchableOpacity style={styles.buttonStyle} onPress={registerBaby}>
                            <Text style={styles.textButtonStyle}>Enviar</Text>
                        </TouchableOpacity>
                    </Dialog.Content>
                </Dialog>
                <Dialog visible={modalVisibleOptions} onDismiss={hideDialogOptions}>
                    <Dialog.Content style={{display: "flex", flexDirection: "column", gap: 10, }}>
                        <TouchableOpacity style={styles.buttonOption}>
                            <Text>Alterar dados do bebê</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonOption}>
                            <Text style={{color: "red"}}>Excluir dados</Text>
                        </TouchableOpacity>
                    </Dialog.Content>
                </Dialog>
            </Portal>

        </View>
    );
}

export default RegisterChild;