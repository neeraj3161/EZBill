
import { StyleSheet, Text, View, Image , TouchableOpacity,Button} from 'react-native'
import React, { useState,useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import SalesDashboard from '../Sales/SalesDashboard';
import InventoryDashborad from '../Inventory/InventoryDashborad';

const Inventory = () => {
  const navigations = useNavigation();
  return (
    <View style={styles.mainContainer}>
    <View style={styles.topNavBar}>
    <TouchableOpacity onPress={()=>{navigations.navigate("Home")}}>
          <Image style={{margin:20, tintColor:'#fff'}} source={require('../../assets/icons/arrow_back.png')} resizeMode='contain' />
          </TouchableOpacity>
      <View>
          <Text style={styles.brandNameTxt}>Inventory</Text>
        </View>
        <View style={styles.icons}>
          
        <TouchableOpacity>
          <Image style={{margin:20, tintColor:'#fff'}} source={require('../../assets/icons/scan.png')} resizeMode='contain'/>
          </TouchableOpacity>
          <TouchableOpacity >          
  <Image style={{margin:20, tintColor:'#fff'}} source={require('../../assets/icons/add.png')} resizeMode='contain'/>
</TouchableOpacity>
<TouchableOpacity>          
  <Image style={{margin:20, tintColor:'#fff'}} source={require('../../assets/icons/support.png')} resizeMode='contain'/>
</TouchableOpacity>

        </View>
    </View>
    <InventoryDashborad/>
    </View>
  )
}

export default Inventory

const styles = StyleSheet.create({
  mainContainer:{
    color:'#000',
    backgroundColor:'white'
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

  icons:{
    flexDirection:'row'
  }

  
})