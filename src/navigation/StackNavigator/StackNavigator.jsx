import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from '../../screens/Main/Home'
import SalesNavigator from './SalesNavigator'
import Sales from '../../screens/Main/Sales'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

const StackNavigator = () => {


  // createNativeStackNavigator({
  //   Home:Home,
  //   Sales:SalesNavigator
  // })

  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen options={{headerShown:false}} name='Sales' component={Sales}/>
      
    </Stack.Navigator>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})