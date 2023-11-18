import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
const NavigateHome = () => {
  const navigations = useNavigation();
  useEffect(()=>{
    navigations.navigate("Home");
  },[])
  return (
    <View>
      <Text>SalesNavigator</Text>
    </View>
  )
}

export default NavigateHome

const styles = StyleSheet.create({})