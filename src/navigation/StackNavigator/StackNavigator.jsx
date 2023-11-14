import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from '../../screens/Main/Home'
import SalesNavigator from './SalesNavigator'
import Sales from '../../screens/Main/Sales'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Inventory from '../../screens/Main/Inventory'

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen options={{headerShown:false}} name='SalesDash' component={Sales}/>
      <Stack.Screen options={{headerShown:false}} name='InvDash' component={Inventory}/>
      
    </Stack.Navigator>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})