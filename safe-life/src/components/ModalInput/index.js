import * as React from "react";
import { TextInput } from "react-native";
import styles from "./styles";

const ModalInput = ({placeholder, value, onChangeText}) => {
  
    return (
        <TextInput placeholder={placeholder} style={styles.inputStyle} placeholderTextColor={"#4F4F4F"} value={value} onChangeText={onChangeText}/>
    );
  };
  
  export default ModalInput;
