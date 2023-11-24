import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Dialog, Portal } from 'react-native-paper';
import { TextInput } from 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import { RadioButton } from 'react-native-paper';
import ModalButton from '../../components/ModalButton';




const RegisterChild = () => {
    const [modalVisible, setModalVisible] = React.useState(false);
    const [name, setName] = useState('');
    const [genre, setGenre] = useState('');


    const hideDialog = () => setModalVisible(false);

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
                        <TouchableOpacity style={styles.buttonStyle}>
                            <Text style={styles.textButtonStyle}>Enviar</Text>
                        </TouchableOpacity>

                    </Dialog.Content>
                </Dialog>
            </Portal>
        </View>
    );
}

export default RegisterChild;