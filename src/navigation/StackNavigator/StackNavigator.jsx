import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Profile from '../../screens/Profile/Profile'
import BottomTab from '../BottomNavigation/BottomTab'
import DrawerNavigation from '../DrawerNavigation/DrawerNavigation'

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName='Bottom'>
       
      
      
      
    </Stack.Navigator>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})