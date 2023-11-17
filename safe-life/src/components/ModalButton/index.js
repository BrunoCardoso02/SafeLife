import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import styles from './styles';


const ModalButton = ({title}) => {
  return (
    <TouchableOpacity style={styles.buttonStyle}>
        <Text style={styles.textStyle}>{title}</Text>
    </TouchableOpacity>
  );
}

export default ModalButton;