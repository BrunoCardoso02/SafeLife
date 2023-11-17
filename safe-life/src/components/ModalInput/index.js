import * as React from "react";
import { TextInput } from "react-native";
import styles from "./styles";

const ModalInput = ({placeholder, value, onChangeText, secureTextEntry}) => {
  
    return (
        <TextInput 
        placeholder={placeholder}
        style={styles.inputStyle} 
        placeholderTextColor={"#4F4F4F"} 
        value={value} 
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        />

    );
  };
  
  export default ModalInput;
