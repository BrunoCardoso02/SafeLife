import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome Screen' screenOptions={{headerShown: false}} >
        <Stack.Screen name='Welcome Screen' component={HomeScreen} />
        <Stack.Screen name='Sign Up Screen' component={SignUpScreen} />
        <Stack.Screen name='Login Screen' component={LoginScreen} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}
