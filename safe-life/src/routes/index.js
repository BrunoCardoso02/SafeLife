import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons';
import HeartRateScreen from '../screens/HeartRate';
import RecomendationsScreen from '../screens/Recomendation';
import { Platform } from 'react-native';
import NotificationsScreen from '../screens/Notification';


const Tab = createBottomTabNavigator();


const TabBarNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#970AED",
        tabBarInactiveTintColor: "#D5A6F2",
        tabBarStyle: {
          backgroundColor: "#fff",
          position: "absolute",
          bottom: Platform.OS == "ios" ? 12 : 15,
          left: Platform.OS == "ios" ? 15 : 10,
          right: Platform.OS == "ios" ? 15 : 10,
          alignItems: 'center',
          borderRadius: 12,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 4,
          elevation: 4
        },
      }}
    >
      <Tab.Screen
        name="Batimentos"
        component={HeartRateScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => <Entypo name='bar-graph' size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Recomendados"
        component={RecomendationsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => <Ionicons name='book' size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Notificações"
        component={NotificationsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => <Ionicons name='notifications' size={size} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}



export default TabBarNavigator;