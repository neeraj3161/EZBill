import { StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import BottomTab from './src/navigation/BottomNavigation/BottomTab'

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar hidden={true}/>
      <BottomTab/>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})