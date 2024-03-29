import React, { useState, useContext, useEffect } from 'react';
import { View, Text, ScrollView, Platform, } from 'react-native';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import api from '../../api/api';
import { AuthContext } from '../../Context/AuthContext';
import { useNavigateToScreen } from '../../utils/navigations';
import { Button, Dialog, Portal, Title } from 'react-native-paper';
import axios from 'axios';

const SettingsScreen = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const { token, id, setToken } = useContext(AuthContext);
  const [showExitModal, setShowExitModal] = React.useState(false);


  const navigationScreen = useNavigateToScreen();

  const hideExitModal = () => setShowExitModal(false);



  function getData() {
    api.apiWithAuth.get(`/account/show?accountId=${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((res) => {
        const fullName = res.data.fullName;
        const email = res.data.email;
        const userName = res.data.username
        setFullName(fullName);
        setEmail(email);
        setUserName(userName);
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getData()
  }, [])


  function deleteUser() {
    api.apiWithAuth.delete(`/account/delete?accountId=${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((res) => {
        console.log("Conta excluída");
        navigationScreen("Login Screen");
        hideExitModal()
      })
      .catch((err) => {
        alert("Erro ao excluir a conta")
      })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>Configurações</Text>
      <View style={styles.containerSettings}>
        <View style={styles.containerTitleSettings}>
          <Text style={styles.titleSettings}>Bem-vinda</Text>
          <Text style={styles.nameTitleSettings}> {fullName}</Text>
        </View>
        <View style={styles.containerModalSettings}>
          <View style={styles.containerInfoSettings}>
            <Text style={styles.textDefinition}>Nome completo</Text>
            <View style={styles.containerEdit}>
              <Text>{fullName}</Text>
            </View>
          </View>
          <View style={styles.containerInfoSettings}>
            <Text style={styles.textDefinition}>Email</Text>
            <View style={styles.containerEdit}>
              <Text>{email}</Text>

            </View>
          </View>
          <View style={styles.containerInfoSettings}>
            <Text style={styles.textDefinition}>Username</Text>
            <View style={styles.containerEdit}>
              <Text>{userName}</Text>
            </View>
          </View>
        </View>
        <View style={styles.containerExit}>
          <TouchableOpacity style={styles.buttonExitStyle} onPress={() => {
            navigationScreen("Login Screen")
            setToken(null)
          }
          }>
            <Text style={styles.textButtonExit}>Sair</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setShowExitModal(true)}>
            <Text style={styles.textDeleteAccount}>Excluir conta</Text>
          </TouchableOpacity>
          <Portal>
            <Dialog visible={showExitModal} onDismiss={hideExitModal}>
              <Dialog.Actions style={styles.dialogExitModal}>
                <Text>Deseja realmente excluir a conta?</Text>
                <View style={styles.styleOptionModal}>
                  <TouchableOpacity onPress={() => setShowExitModal(false)}>
                    <Text style={styles.textOptionCancelModal}>Não</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={deleteUser}>
                    <Text style={styles.textOptionDeleteModal}>Sim</Text>
                  </TouchableOpacity>
                </View>
              </Dialog.Actions>
            </Dialog>

          </Portal>
        </View>
      </View>
    </View>
  );
};

export default SettingsScreen;
