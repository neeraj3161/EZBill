import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Profile from '../../screens/Profile/Profile'
import BottomTab from '../BottomNavigation/BottomTab'

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName='Bottom'>

       <Stack.Screen options={{headerShown:false}} name='Bottom' component={BottomTab}/>
      <Stack.Screen options={{headerShown:false}} name='Profile' component={Profile} />
      
    </Stack.Navigator>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})