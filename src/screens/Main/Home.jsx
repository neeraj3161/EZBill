
//Accordion video reference https://youtu.be/WyWfKUo4FtE

import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList } from 'react-native'
import React, { useState } from 'react'
import Dashboard from '../Dashboard/Dashboard';

const data = [
  { key: 'Profile', screen: 'ProfileScreen' },
  { key: 'Settings', screen: 'SettingsScreen' },
  { key: 'About', screen: 'AboutScreen' },
  { key: 'Support', screen: 'SupportScreen' },
];



const Home = ({navigation}) => {
  const [showhomeMenuVert,setShowhomeMenuVert] = useState(false);


  const setVermMenu = ()=>{
    setShowhomeMenuVert(!showhomeMenuVert);
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate(item.screen)}
      style={{ padding: 16, borderBottomWidth: 1, borderColor: '#ddd' }}
    >
      <Text>{item.key}</Text>
    </TouchableOpacity>);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.topNavBar}>
          <View>
            <Text style={styles.brandNameTxt}>EzBill</Text>
            <Text style={styles.verionTxt}>V1.0.0</Text>
          </View>
          <View>
            <TouchableOpacity>
              <View style={{flexDirection:'row'}}>
              <Text style={styles.shopName}>Gada Salon Wala</Text>
              <Image source={require("../../assets/icons/edit.png")} style={{height:13, width:13,position:'relative',top:5,left:5}} tintColor={'#fff'}/>
              </View>
            </TouchableOpacity>
            </View>
          <View style={{zIndex:20}}>
            <TouchableOpacity onPress={setVermMenu}>
              <Image source={require("../../assets/icons/more_vert.png")} width={20} height={25} tintColor={'white'}/>
            </TouchableOpacity>
            {showhomeMenuVert && 
            <View style={styles.card}>
              <TouchableOpacity>
                <Text style={styles.menuTxt}>Profile</Text>
                </TouchableOpacity>
              <TouchableOpacity ><Text style={styles.menuTxt}>Settings</Text></TouchableOpacity>
              <TouchableOpacity ><Text style={styles.menuTxt}>About</Text></TouchableOpacity>
              <TouchableOpacity ><Text style={styles.menuTxt}>Contact Us</Text></TouchableOpacity>
            </View>}
          </View>

      </View>
      <Dashboard/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  mainContainer:{
  },
  topNavBar:{
    height:60,
    backgroundColor:'#525FE1',
    alignItems: 'center',
    flexDirection:'row',
    justifyContent:'space-between',
    
    width:'100%'
  },

  brandNameTxt:{
    color:'#fff',
    fontSize:20,
    fontWeight:'500',
    marginLeft:10
  },

  verionTxt:{
    marginLeft:10,
    fontSize:10,
    fontWeight:'600',
    color:'#fff'
  },

  card:{
    width:150,
    height:200,
    backgroundColor:'#fff',
    position:'absolute',
    top:40,
    right:0,
    shadowOpacity:0.25,
    shadowRadius:3.5,
    //elevation only works for android
    elevation:5,
    justifyContent:'center',
    borderRadius:10,
    zIndex:10
  },

  menuTxt:{
    color:'#000',
    padding:12,
  },
  shopName:{
    marginLeft:10,
    fontSize:15,
    fontWeight:'500',
    color:'#fff',
    letterSpacing:0
  },
})