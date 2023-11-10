import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from '../../screens/Main/Home'
import SalesNavigator from './SalesNavigator'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

const StackNavigator = () => {


  // createNativeStackNavigator({
  //   Home:Home,
  //   Sales:SalesNavigator
  // })

  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Home}/>
      <Stack.Screen name='Sales' component={SalesNavigator}/>
    </Stack.Navigator>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})