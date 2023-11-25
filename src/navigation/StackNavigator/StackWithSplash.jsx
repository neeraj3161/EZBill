import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StackNavigator from './StackNavigator';
import SplashScreen from '../../screens/Splash/SplashScreen';
import DrawerNavigation from '../DrawerNavigation/DrawerNavigation';
import BottomTab from '../BottomNavigation/BottomTab';
import Profile from '../../screens/Profile/Profile';
import AllStaffDash from '../../screens/DrawerScreens/Staff/AllStaffDash';
import ManageStaffDash from '../../screens/DrawerScreens/Staff/ManageStaffDash';
import Staff from '../../screens/DrawerScreens/Staff/Staff';
import AddStaff from '../../screens/DrawerScreens/Staff/AddStaff';
const StackWithSplash = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Splash"
        component={SplashScreen}
      />
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

      <Stack.Screen
        options={{headerShown: false}}
        name="AllStaffList"
        component={AllStaffDash}
      />

      <Stack.Screen
        options={{headerShown: false}}
        name="ManageStaff"
        component={Staff}
      />

      <Stack.Screen
        options={{headerShown: false}}
        name="AddStaff"
        component={AddStaff}
      />
    </Stack.Navigator>
  );
};

export default StackWithSplash;

const styles = StyleSheet.create({});
