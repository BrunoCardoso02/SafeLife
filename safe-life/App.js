import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome Screen' screenOptions={{headerShown: false}} >
        <Stack.Screen name='Welcome Screen' component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
