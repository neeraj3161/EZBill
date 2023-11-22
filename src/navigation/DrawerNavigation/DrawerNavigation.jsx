import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTab from '../BottomNavigation/BottomTab';
import Staff from '../../screens/DrawerScreens/Staff/Staff';
import Profile from '../../screens/Profile/Profile';
import Logout from '../../screens/DrawerScreens/Logout';
import Customers from '../../screens/DrawerScreens/Customers';
import GST from '../../screens/DrawerScreens/GST';
import DrawerContentMain from '../../screens/DrawerScreens/DrawerContentMain';
import AddStaff from '../../screens/DrawerScreens/Staff/AddStaff';


const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator screenOptions={{drawerPosition:'right'}}  drawerContent={(props)=><DrawerContentMain{...props}/>}>
      <Drawer.Screen name='Dashboard' component={BottomTab} options={{headerShown:false, drawerLabelStyle:{color:'tomato'}}}/>
      <Drawer.Screen name='Customers' component={Customers} options={{headerShown:false}}/>
      <Drawer.Screen name='Manage Staff' component={Staff} options={{headerShown:false}}/>
      <Drawer.Screen name='Add Staff' component={AddStaff} options={{headerShown:false}}/>
      <Drawer.Screen name='Manage Profile' component={Profile} options={{headerShown:false}}/>
      <Drawer.Screen name='Manage GST' component={GST} options={{headerShown:false}}/>
      <Drawer.Screen name='Logout' component={Logout} options={{headerShown:false}}/>




    </Drawer.Navigator>
  )
}

export default DrawerNavigation

const styles = StyleSheet.create({})