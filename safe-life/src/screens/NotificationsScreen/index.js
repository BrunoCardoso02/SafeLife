import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';

const NotificationsScreen = () => {
  // Função para gerar uma cor aleatória em formato hexadecimal
  const randomColor = () => {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>Notificações</Text>
      <ScrollView contentContainerStyle={styles.containerNotification}>
        {[1, 2, 3, 4].map((item, index) => (
          <View style={styles.modalNotification} key={index}>
            <View style={[styles.modalTitleNotification, { borderColor: randomColor() }]}>
              <Entypo name='dot-single' size={25} color={randomColor()} />
              <Text style={styles.titleNotification}>Notification Title</Text>
            </View>
            <Text style={styles.textNotification}>
              Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, ipsum dolor consectetur Lorem ipsum dolor sit amet, ipsum dolor
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default NotificationsScreen;
