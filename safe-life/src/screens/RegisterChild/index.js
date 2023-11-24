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
import Entypo from 'react-native-vector-icons/Entypo';
import { ProjectContext } from '../../Context/ProjectContext';


const RegisterChild = () => {
    const [modalVisible, setModalVisible] = React.useState(false);
    const [name, setName] = useState('');
    const [genre, setGenre] = useState('');
    const { token, id } = useContext(AuthContext);
    const [babyData, setBabyData] = useState([]);
    const [modalVisibleOptions, setModalVisibleOptions] = React.useState(false);
    const [modalVisibleUpdate, setModalVisibleUpdate] = React.useState(false);
    const { idProject, setIdProject } = useContext(ProjectContext);
    const [projectSelected, setProjectSelected] = useState({});
    const [updatedBabyName, setUpdateBabyName] = useState('');
    const [updatedGenre, setUpdateGenre] = useState('');
    const [selectedBabyId, setSelectedBabyId] = useState(null);


    const hideDialogRegister = () => setModalVisible(false);

    const hideDialogOptions = () => setModalVisibleOptions(false)

    const hideDialogUpdate = () => setModalVisibleOptions(false)

    const navigationScreen = useNavigateToScreen();

    const data = {
        babyName: name,
        genre: genre
    };
    const updateDatas = {
        babyName: updatedBabyName,
        genre: updatedGenre
    };
    function registerBaby() {
        api.apiWithAuth.post(`/baby/project/create?accountId=${id}`, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                console.log('Baby registrado com sucesso:', response.data);
                const dataProject = response.data.codBabyProject
                getBabyData();
                setName('')
                setModalVisible(false);
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
    }, []);

    function deleteBabyData(id) {
        api.apiWithAuth.delete(`http://rest-api.brazilsouth.azurecontainer.io:8080/baby/project/delete?projectId=${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(() => {
                console.log("Dados excluídos");
                getBabyData();
                setModalVisibleOptions(false)

            })
            .catch(() => {
                console.log("DEU ERROOOOOOOOOOOO")
            })
    };

    function PatchBabyData(id) {
        api.apiWithAuth.put(`/baby/project/update?projectId=${id}`, updateDatas, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(() => {
                getBabyData();
                setUpdateBabyName('');
                setModalVisibleUpdate(false);
                setModalVisibleOptions(false);
                alert("Dados atualizados")
            })
            .catch((err) => alert(err))
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>Seus bebês👶</Text>
            <ScrollView style={styles.containerItens}>
                {babyData.length > 0 ? (
                    babyData.map((item, indice) => (
                        <TouchableOpacity key={indice} onPress={() => {
                            navigationScreen("Heart Rate Screen");
                            setIdProject(item.codBabyProject);
                        }}>
                            <View style={styles.list}>
                                <View style={styles.listTitleContainer}>
                                    <Text style={styles.listTitle}>{item.babyName}</Text>
                                    <TouchableOpacity onPress={() => {
                                        setModalVisibleOptions(true)
                                        setProjectSelected(item)
                                    }}>
                                        <Entypo name='dots-three-horizontal' size={20} color={"#fff"} style={styles.listIconOptions} />
                                    </TouchableOpacity>
                                </View>
                                <Text style={styles.listText}>Gênero: {item.genre}</Text>
                            </View>
                        </TouchableOpacity>

                    ))
                ) : (
                    <View style={styles.nodataView}>
                        <Text style={styles.noDataText}>Sem dados disponíveis</Text>
                    </View>
                )}
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
            </Portal>
            <Dialog visible={modalVisibleOptions} onDismiss={hideDialogOptions}>
                {babyData.map((baby, indice) => {
                    const isProjectSelected = projectSelected.codBabyProject === baby.codBabyProject;
                    return (
                        <View key={indice}>
                            {isProjectSelected && (
                                <>
                                    <TouchableOpacity 
                                        style={styles.buttonOption} 
                                        onPress={() => {
                                            setSelectedBabyId(baby.codBabyProject);
                                            console.log('selectedBabyId:', selectedBabyId);
                                            setModalVisibleUpdate(true);
                                        }}
                                    >
                                        <Text>Alterar dados do bebê</Text>
                                    </TouchableOpacity>


                                    <TouchableOpacity
                                        style={styles.buttonOption}
                                        onPress={() => deleteBabyData(baby.codBabyProject)}
                                    >
                                        <Text style={{ color: "red" }}>Excluir dados</Text>
                                    </TouchableOpacity>
                                </>
                            )}
                        </View>
                    );
                })}
                {babyData.some(baby => projectSelected.codBabyProject === baby.codBabyProject) ? null : (
                    <Text>Texto a ser exibido quando a condição for verdadeira</Text>
                )}
            </Dialog>

            <Dialog visible={modalVisibleUpdate} onDismiss={() => {
                hideDialogUpdate();
                setModalVisibleUpdate(false);
                setModalVisibleOptions(false);
            }}>
                <Dialog.Title style={styles.titleStyle}>Atualize seu bebê</Dialog.Title>
                <Dialog.Content>
                    <TextInput placeholder='Nome do bebê' value={updatedBabyName} onChangeText={text => setUpdateBabyName(text)} style={styles.inputStyle} />
                    <RadioButton.Group onValueChange={value => setUpdateGenre(value)} value={updatedGenre} style={{ borderWidth: 0, borderColor: 'transparent' }}  >
                        <RadioButton.Item label="Masculino" value="masculino" />
                        <RadioButton.Item label="Feminino" value="feminino" />
                        <RadioButton.Item label="Não tenho certeza..." value="indefinido" />
                    </RadioButton.Group>
                    <TouchableOpacity style={styles.buttonStyle} onPress={() => PatchBabyData(selectedBabyId)}>
                        <Text style={styles.textButtonStyle}>Enviar</Text>
                    </TouchableOpacity>
                </Dialog.Content>
            </Dialog>
        </View>
    );
}

export default RegisterChild;