//reference video for bottom navigation: https://youtu.be/gPaBicMaib4

import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

//importing screen for navigation
import Home from '../../screens/Main/Home';
import Inventory from '../../screens/Main/Inventory';
import Reports from '../../screens/Main/Reports';
import Sales from '../../screens/Main/Sales';
import SalesNavigator from '../StackNavigator/SalesNavigator';
import StackNavigator from '../StackNavigator/StackNavigator';



const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator screenOptions={{
        tabBarShowLabel:false,
        headerShown:false,
        
        tabBarStyle:{
            position:'absolute',
            elevation:0,
            backgroundColor:'#ffffff',
            borderTopEndRadius:15,
            borderTopLeftRadius:15,
            height:90
        }
        }}>
        <Tab.Screen name="Home" component={Home} options={{
            tabBarIcon:({focused})=>(
                <View style={{alignItems:'center',justifyContent:'center',top:10}}>
                    <Image source={require("../../assets/icons/home.png")} resizeMode='contain' style={{width:25, height:25, tintColor: focused ? '#e32f45' : '#748c94'}}/>
                    <Text style={{color:focused ? '#e32f45' : '#748c94' , fontSize:12}}>Home</Text>
                </View>
            )
        }}/>
        <Tab.Screen name="Sales" component={StackNavigator} options={{
            tabBarIcon:({focused})=>(
                <View style={{alignItems:'center',justifyContent:'center',top:10}}>
                    <Image source={require("../../assets/icons/store.png")} resizeMode='contain' style={{width:25, height:25, tintColor: focused ? '#e32f45' : '#748c94'}}/>
                    <Text style={{color:focused ? '#e32f45' : '#748c94' , fontSize:12}}>Sales</Text>
                </View>
            ),
            tabBarStyle:{display:'none'}
        }}/>
        <Tab.Screen name="Inventory" component={Inventory} options={{
            tabBarIcon:({focused})=>(
                <View style={{alignItems:'center',justifyContent:'center',top:10}}>
                    <Image source={require("../../assets/icons/inv.png")} resizeMode='contain' style={{width:25, height:25, tintColor: focused ? '#e32f45' : '#748c94'}}/>
                    <Text style={{color:focused ? '#e32f45' : '#748c94' , fontSize:12}}>Inventory</Text>
                </View>
            )
        }}/>
        <Tab.Screen name="Reports" component={Reports} options={{
            tabBarIcon:({focused})=>(
                <View style={{alignItems:'center',justifyContent:'center',top:10}}>
                    <Image source={require("../../assets/icons/report.png")} resizeMode='contain' style={{width:25, height:25, tintColor: focused ? '#e32f45' : '#748c94'}}/>
                    <Text style={{color:focused ? '#e32f45' : '#748c94' , fontSize:12}}>Reports</Text>
                </View>
            )
        }}/>

<Tab.Screen name="Sellers" component={Reports} options={{
            tabBarIcon:({focused})=>(
                <View style={{alignItems:'center',justifyContent:'center',top:10}}>
                    <Image source={require("../../assets/icons/report.png")} resizeMode='contain' style={{width:25, height:25, tintColor: focused ? '#e32f45' : '#748c94'}}/>
                    <Text style={{color:focused ? '#e32f45' : '#748c94' , fontSize:12}}>Sellers</Text>
                </View>
            )
        }}/>

        
    </Tab.Navigator>

  )
}

export default BottomTab

const styles = StyleSheet.create({
    shadow:{
        shadowColor:'#777',
        shadowOffset:{
            width:0,
            height:10
        },
        shadowOpacity:0.25,
        shadowRadius:3.5,
        //elevation only works for android
        elevation:5
    }
})