import { StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import BottomTab from './src/navigation/BottomNavigation/BottomTab'
import Profile from './src/screens/Profile/Profile'
import Home from './src/screens/Main/Home'
import StackNavigator from './src/navigation/StackNavigator/StackNavigator'
import StackWithSplash from './src/navigation/StackNavigator/StackWithSplash'

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar hidden={true}/>
      <StackWithSplash/>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})