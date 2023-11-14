import {StyleSheet, Text, View, ScrollView, Image, Pressable} from 'react-native';
import React from 'react';
import InventoryCard from '../../utils/Common/InventoryCard';
import RNFS from 'react-native-fs';

import {FlashList} from '@shopify/flash-list';

import {SafeAreaView} from 'react-native-safe-area-context';

const InventoryDashborad = () => {
  const data = [
    {
      id: 1,
      name: 'Low stock items',
      qty: 20,
      description: 'Items should be reordered!!',
      iconName: 'analytics.png',
    },
    {
      id: 2,
      name: 'Stock Out',
      qty: 10,
      description: 'Stocked out items!!',
      iconName: 'no-stock.png',
    },
    {
      id: 3,
      name: 'High Demand High stock',
      qty: 2,
      description: 'High demands this month',
      iconName: 'high-value.png',
    },
    {
      id: 4,
      name: 'Total Inventory Stock',
      qty: 1350,
      description: 'Total  items',
      iconName: 'high-value.png',
    },
    {
      id: 5,
      name: 'Low demand High Stock',
      qty: 139,
      description: 'Low demand high stocks',
      iconName: 'high-value.png',
    },
    {
      id: 6,
      name: 'High demand Low Stock',
      qty: 201,
      description: 'High demand Low stocks',
      iconName: 'high-value.png',
    },

    ,
    {
      id: 6,
      name: 'High Stock',
      qty: 201,
      description: 'High stock items',
      iconName: 'high-value.png',
    }
  ];

    

  return (
    <ScrollView style={{height: '100%'}}>
      
    <Text style={styles.headerTxt} >Actuals</Text>
    {/* //HDHS */}
        <InventoryCard color={'green'} backgroundColor={'#f8f8f8'} borderLeftColor={'green'} name={data[2].name} description={data[2].description} qty={data[2].qty}/>
        {/* //HDLS */}
        <InventoryCard color={'#ff3232'}  backgroundColor={'#f8f8f8'} borderLeftColor={'#ff3232'} name={data[5].name} description={data[5].description} qty={data[5].qty}/>

        {/* //LS */}
        <InventoryCard color={'#4c4cff'} backgroundColor={'#f8f8f8'} borderLeftColor={'#190482'} name={data[0].name} description={data[0].description} qty={data[0].qty}/>

        {/* //SO */}
         <InventoryCard color={'tomato'} backgroundColor={'#f8f8f8'} borderLeftColor={'#BE3144'} name={data[1].name} description={data[1].description} qty={data[1].qty}/>
        
         {/* //LDHS */}
         <InventoryCard color={'#7f7f00'}  backgroundColor={'#f8f8f8'} borderLeftColor={'#7f7f00'} name={data[4].name} description={data[4].description} qty={data[4].qty}/>

         {/* //LDHS */}
         <InventoryCard color={'#4c4c4c'}  backgroundColor={'#f8f8f8'} borderLeftColor={'#070707'} name={data[3].name} description={data[3].description} qty={data[3].qty}/>
        
    </ScrollView>
  );
};

export default InventoryDashborad;

const styles = StyleSheet.create({
  txt: {
    color: '#000',
    fontSize: 15,
    letterSpacing: 1,
    marginBottom: 5,
  },
  description: {
    color: '#D7D7D7',
    fontSize: 13,
  },

  mainContainer: {
    height: 200,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
    justifyContent:'space-around'
  },

  txtContainer: {
    flexDirection: 'column',
    marginHorizontal: 10,
  },

  qtyContainer:{

  },

  img:{
    width: 50, height: 50, borderRadius: 100
  },

  rightIcon:{
    width: 20, height: 20, borderRadius: 100, tintColor:'#525FE1'
  },

  qtyTxt:{
    fontWeight:'bold',
    fontFamily:'sans-serif',
    fontSize:30,
    color:'#E9B824'
  },

  headerTxt:{
    color:'#777',
    marginHorizontal:20,
    marginTop:20,
    fontWeight:'normal'
    }
});
