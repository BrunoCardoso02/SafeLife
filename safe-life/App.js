import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/Home';
import LoginScreen from './src/screens/Login';
import SignUpScreen from './src/screens/SignUp';
import HeartRateScreen from './src/screens/HeartRate';
import RecomendationsScreen from './src/screens/Recomendation';
import TabBarNavigator from './src/routes';
import NotificationsScreen from './src/screens/Notification';
import { PaperProvider } from 'react-native-paper';



const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome Screen" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Welcome Screen" component={HomeScreen} />
          <Stack.Screen name="Sign Up Screen" component={SignUpScreen} />
          <Stack.Screen name="Login Screen" component={LoginScreen} />
          <Stack.Screen name="Heart Rate Screen" component={TabBarNavigator} />
          <Stack.Screen name="Recomendations Screen" component={TabBarNavigator} />
          <Stack.Screen name="Notifications Screen" component={TabBarNavigator}/>
        </Stack.Navigator>
      </NavigationContainer>
      </PaperProvider>
  );
}
