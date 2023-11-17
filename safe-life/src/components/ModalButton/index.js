import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import styles from './styles';


const ModalButton = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
        <Text style={styles.textStyle}>{title}</Text>
    </TouchableOpacity>
  );
}

export default ModalButton;