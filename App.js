import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed  from './screens/CreateStory';
import CreateStory from './screens/CreateStory';
import DrawerNavigator from './screens/navigation/DrawerNavigator';


export default function App() {
  return (
    <NavigationContainer>
     <DrawerNavigator/>
    </NavigationContainer>
  );
}

