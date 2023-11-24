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


const RegisterChild = () => {
    const [modalVisible, setModalVisible] = React.useState(false);
    const [name, setName] = useState('');
    const [genre, setGenre] = useState('');
    const {token, id} = useContext(AuthContext)

    const hideDialog = () => setModalVisible(false);

    const data = {
        babyName: name,
        genre: genre
    }
    function registerBaby(){
        api.apiWithAuth.post(`/baby/project/create?accountId=${id}`, data, {
            headers: {
                Authorization: `Bearer ${token}` 
            }
        })
        .then(response => {
            console.log('Baby registrado com sucesso:', response.data);
        })
        .catch(error => {
            console.error('Erro ao registrar o bebê:', error);
        });
    
    }
    
    useEffect(() => {
        console.log(token, id)
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>Seus bebês👶</Text>
            <ScrollView style={styles.containerItens}>
                <View style={styles.list}>
                    <Text style={styles.listTitle}>Thiaguinho</Text>
                    <Text style={styles.listText}>Gênero: Não Binário</Text>
                </View>
                <View style={styles.list}>
                    <Text style={styles.listTitle}>Thiaguinho</Text>
                    <Text style={styles.listText}>Gênero: Não Binário</Text>
                </View>
                <View style={styles.list}>
                    <Text style={styles.listTitle}>Thiaguinho</Text>
                    <Text style={styles.listText}>Gênero: Não Binário</Text>
                </View>
                <View style={styles.list}>
                    <Text style={styles.listTitle}>Thiaguinho</Text>
                    <Text style={styles.listText}>Gênero: Não Binário</Text>
                </View>
                <View style={styles.list}>
                    <Text style={styles.listTitle}>Thiaguinho</Text>
                    <Text style={styles.listText}>Gênero: Não Binário</Text>
                </View>
                <View style={styles.list}>
                    <Text style={styles.listTitle}>Thiaguinho</Text>
                    <Text style={styles.listText}>Gênero: Não Binário</Text>
                </View>
                <View style={styles.list}>
                    <Text style={styles.listTitle}>Thiaguinho</Text>
                    <Text style={styles.listText}>Gênero: Não Binário</Text>
                </View>
            </ScrollView>
            <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
                <MaterialIcons name='add' size={40} color={"#fff"} />
            </TouchableOpacity>
            <Portal>
                <Dialog visible={modalVisible} onDismiss={hideDialog}>
                    <Dialog.Title style={styles.titleStyle}>Registre seu bebê</Dialog.Title>
                    <Dialog.Content>
                        <TextInput placeholder='Nome do bebê' value={name} onChangeText={text => setName(text)} style={styles.inputStyle} />
                        <RadioButton.Group onValueChange={value => setGenre(value)} value={genre} style={{ borderWidth: 0, borderColor: 'transparent'}}  >
                            <RadioButton.Item label="Masculino" value="masculino" />
                            <RadioButton.Item label="Feminino" value="feminino" />
                            <RadioButton.Item label="Não tenho certeza..." value="indefinido"/>
                        </RadioButton.Group> 
                        <TouchableOpacity style={styles.buttonStyle} onPress={registerBaby}>
                            <Text style={styles.textButtonStyle}>Enviar</Text>
                        </TouchableOpacity>
                    </Dialog.Content>
                </Dialog>
            </Portal>
        </View>
    );
}

export default RegisterChild;