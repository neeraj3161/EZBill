import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StackNavigator from './StackNavigator';
import SplashScreen from '../../screens/Splash/SplashScreen';
import DrawerNavigation from '../DrawerNavigation/DrawerNavigation';
import BottomTab from '../BottomNavigation/BottomTab';
import Profile from '../../screens/Profile/Profile';
const StackWithSplash = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Drawer"
        component={DrawerNavigation}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Stack"
        component={StackNavigator}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Bottom"
        component={BottomTab}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Profile"
        component={Profile}
      />
    </Stack.Navigator>
  );
};

export default StackWithSplash;

const styles = StyleSheet.create({});
