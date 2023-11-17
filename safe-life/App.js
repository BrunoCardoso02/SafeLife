import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import HeartRateScreen from './src/screens/HeartRateScreen';
import NotificationsScreen from './src/screens/NotificationsScreen';
import TabBarNavigator from './src/routes';


const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome Screen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome Screen" component={HomeScreen} />
        <Stack.Screen name="Sign Up Screen" component={SignUpScreen} />
        <Stack.Screen name="Login Screen" component={LoginScreen} />
        <Stack.Screen name="Heart Rate Screen" component={TabBarNavigator} />
        <Stack.Screen name="Notification Screen" component={TabBarNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
