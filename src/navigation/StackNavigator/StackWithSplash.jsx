import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import StackNavigator from './StackNavigator'
import SplashScreen from '../../screens/Splash/SplashScreen'

const StackWithSplash = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>

       <Stack.Screen options={{headerShown:false}} name='Splash' component={SplashScreen}/>
        
       <Stack.Screen options={{headerShown:false}} name='Stack' component={StackNavigator}/>
      
    </Stack.Navigator>
  )
}

export default StackWithSplash

const styles = StyleSheet.create({})